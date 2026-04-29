// ==========================================
// TOOL: COLOSSEUM ROTATION (WITH ADMIN SYNC)
// ==========================================

// Attempt to load a saved anchor point from device memory, otherwise use fallback
let savedAnchor = localStorage.getItem("coloAnchorTime");
let dynamicCycleStart = savedAnchor ? parseInt(savedAnchor) : 1770375000000;

const COLO_PHASE_LENGTH = (5 * 24 + 10) * 3600 * 1000; // 5 days, 10 hours in ms (130 hours)
const COLO_CYCLE_LENGTH = COLO_PHASE_LENGTH * 7;

const ROTATION_PHASES = [
    { troop: "100 INFANTRY", buff: "Infantry Wedge" },           // Index 0
    { troop: "50/50 INFANTRY RANGE", buff: "Infantry Phalanx" }, // Index 1
    { troop: "100 RANGE", buff: "Range Wedge" },                 // Index 2
    { troop: "50/50 RANGE CAVALRY", buff: "Range Phalanx" },     // Index 3
    { troop: "100 CAVALRY", buff: "Cavalry Wedge" },             // Index 4
    { troop: "50/50 INFANTRY CAVALRY", buff: "Cavalry Phalanx" },// Index 5
    { troop: "50/50 INFANTRY RANGE", buff: "Range Phalanx" }     // Index 6
];

function updateColoTimer() {
    const tool = document.getElementById("coloTool");
    if(!tool || tool.style.display !== "block") return;

    let now = Date.now();
    let diff = now - dynamicCycleStart;
    let elapsed = diff % COLO_CYCLE_LENGTH;
    if(elapsed < 0) elapsed += COLO_CYCLE_LENGTH;

    let currentPhaseIndex = Math.floor(elapsed / COLO_PHASE_LENGTH);
    let timeInCurrentPhase = elapsed % COLO_PHASE_LENGTH;
    let timeLeftInPhase = COLO_PHASE_LENGTH - timeInCurrentPhase;

    let d = Math.floor(timeLeftInPhase / (24*3600*1000));
    let h = Math.floor((timeLeftInPhase % (24*3600*1000)) / (3600*1000));
    let m = Math.floor((timeLeftInPhase % (3600*1000)) / (60*1000));
    let s = Math.floor((timeLeftInPhase % (60*1000)) / 1000);

    document.getElementById("c-timer-next").innerText = `${d}d ${h}h ${m}m ${s}s`;

    let currentPhase = ROTATION_PHASES[currentPhaseIndex];
    let nextIndex = (currentPhaseIndex + 1) % 7;
    let nextPhase = ROTATION_PHASES[nextIndex];

    document.getElementById("c-current-buff").innerText = currentPhase.buff;
    document.getElementById("c-current-troop").innerText = currentPhase.troop;
    document.getElementById("c-next-buff").innerText = `${nextPhase.buff} (${nextPhase.troop})`;

    renderColoList(currentPhaseIndex);
}

function renderColoList(activeIndex) {
    const listContainer = document.getElementById("coloListContainer");
    if (!listContainer) return;

    if (listContainer.innerHTML === "") {
        let html = "";
        ROTATION_PHASES.forEach((phase, idx) => {
            html += `<li id="colo-li-${idx}">
                        <div class="buff-name">${phase.buff}</div>
                        <span class="troop-type">${phase.troop}</span>
                     </li>`;
        });
        listContainer.innerHTML = html;
    }

    document.querySelectorAll(".colo-list li").forEach(li => li.classList.remove("active"));
    let activeLi = document.getElementById(`colo-li-${activeIndex}`);
    if(activeLi) activeLi.classList.add("active");
}

// ==========================================
// ADMIN SYNC FUNCTIONS (Colosseum)
// ==========================================

function toggleAdminPanel() {
    const panel = document.getElementById("coloAdminPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
}

function syncColoRotation() {
    const selectedPhaseIndex = parseInt(document.getElementById("adminPhaseSelect").value);
    const days = parseInt(document.getElementById("adminDays").value) || 0;
    const hours = parseInt(document.getElementById("adminHours").value) || 0;
    const mins = parseInt(document.getElementById("adminMins").value) || 0;

    // Convert inputted time to milliseconds
    const timeLeftInPhaseMs = (days * 24 * 3600 * 1000) + (hours * 3600 * 1000) + (mins * 60 * 1000);

    // Safety check: Don't allow inputs larger than the phase max (130 hours)
    if(timeLeftInPhaseMs > COLO_PHASE_LENGTH) {
        alert("Error: Time remaining cannot exceed 5 days and 10 hours.");
        return;
    }

    // Step 1: Find out how much time has passed in the CURRENT phase
    const elapsedInCurrentPhase = COLO_PHASE_LENGTH - timeLeftInPhaseMs;

    // Step 2: Add up the time of all PREVIOUS phases in the cycle
    const totalElapsedSinceCycleStart = (selectedPhaseIndex * COLO_PHASE_LENGTH) + elapsedInCurrentPhase;

    // Step 3: Subtract that total time from RIGHT NOW to find the true Cycle Start
    const now = Date.now();
    dynamicCycleStart = now - totalElapsedSinceCycleStart;

    // Save to local device storage so it survives page reloads
    localStorage.setItem("coloAnchorTime", dynamicCycleStart.toString());

    alert("Rotation Sync Successful!");
    toggleAdminPanel(); // Auto-close the panel

    // Force UI to update immediately with the new math
    updateColoTimer();
}

// Start Colosseum Live Timer Interval
setInterval(updateColoTimer, 1000);
