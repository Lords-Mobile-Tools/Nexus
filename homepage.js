// ==========================================
// GLOBAL TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(msg) {
    let toast = document.getElementById('toast');
    if(!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast-notif';
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// ==========================================
// GLOBAL NAVIGATION & UTILS
// ==========================================
function openTool(id){
    document.getElementById("toolsMenu").style.display = "none";
    document.getElementById("mainTitle").style.display = "none";
    document.getElementById(id).style.display = "block";
    if(id === 'gearTool') render();
    if(id === 'coloTool') updateColoTimer();
}

function backTools(){
    document.getElementById("toolsMenu").style.display = "block";
    document.getElementById("mainTitle").style.display = "block";
    document.querySelectorAll(".tool").forEach(t => t.style.display = "none");
}

function toggleGuide(id){
    let g = document.getElementById(id);
    g.style.display = (g.style.display === "block") ? "none" : "block";
}

function revealAdv(id){
    document.getElementById(id).style.display = "block";
}

function showResult(content){
    document.getElementById("resultContent").innerHTML = content;
    document.getElementById("resultTab").style.display = "flex";
}

function closeResult(){ 
    document.getElementById("resultTab").style.display = "none"; 
}

function parseInput(id){
    let el = document.getElementById(id);
    if(!el) return 0;
    let v = el.value.replace(/,/g,'');
    return Number(v)||0;
}

function formatInput(input){
    let v = input.value.replace(/[^0-9]/g,'');
    if(v === ""){ input.value = ""; return; }
    input.value = Number(v).toLocaleString();
}

document.querySelectorAll(".tool-input, .troop-box input").forEach(i => {
    i.addEventListener("input", () => { if(i.type !== 'number' && i.type !== 'checkbox') formatInput(i); });
});

function clearInputs(toolId){
    document.querySelectorAll("#" + toolId + " input").forEach(i => { 
        if(i.type === 'checkbox') i.checked = false;
        else i.value = ""; 
    });
    if(toolId === 'troopTool') updateLiveStats();
    if(toolId === 'gemTool'){
        document.getElementById('advEvents').style.display = 'none';
        document.getElementById('advTrove').style.display = 'none';
    }
}
