// ==========================================
// TOOL: CHAOS ARENA TRACKER
// ==========================================
function runChaos() {
    let choice = parseInt(document.getElementById("chaosSelect").value);
    let res = document.getElementById("chaosResult");

    if (choice === 0) { res.style.display = "none"; return; }

    res.style.display = "block";
    let html = ""; let total = 0; let val = 0;

    if (choice === 1 || choice === 2) {
        val = 25000;
        let actionType = choice === 1 ? 'heals' : 'wounded';
        let titleType = choice === 1 ? 'Healing' : 'Wound Enemy';

        html += `<h3>${titleType} T4/T5 Quest</h3><ul>`;
        for(let i = 1; i <= 50; i++) {
            html += `<li><span>Quest ${i}</span> <span><strong>${(val/1000)}k</strong> ${actionType}</span></li>`;
            total += val; val += 5000;
        }
        html += `</ul>`;

        let displayTotal = total >= 1000000 ? (total/1000000).toFixed(3) + 'm' : (total/1000) + 'k';
        html += `<div class="chaos-summary"><strong>Total Needed: ${displayTotal} troops</strong><strong>Total Reward Stone: 2500</strong></div>`;

    } else if (choice === 3) {
        html += `<h3>Gathering Quest</h3><ul>`;
        let totalReward = 0;
        for(let i = 1; i <= 20; i++) {
            html += `<li><span>Quest ${i}</span> <span>Gather lvl 3 nodes <strong>0/${i}</strong></span></li>`;
            totalReward += 100;
        }
        html += `</ul><div class="chaos-summary"><strong>Total Reward Stone: ${totalReward}</strong></div>`;

    } else if (choice === 4) {
        val = 250000;
        html += `<h3>Destroy Enemy Troops (T2 and below)</h3><ul>`;
        for(let i = 1; i <= 50; i++) {
            let displayVal = val >= 1000000 ? (val/1000000).toFixed(3) + 'm' : (val/1000) + 'k';
            html += `<li><span>Quest ${i}</span> <span><strong>${displayVal}</strong> might destroyed</span></li>`;
            total += val; val += 50000;
        }
        html += `</ul>`;

        let displayTotal = total >= 1000000 ? (total/1000000).toFixed(3) + 'm' : (total/1000) + 'k';
        html += `<div class="chaos-summary"><strong>Total Might Destroyed: ${displayTotal}</strong><strong>Total Reward Stone: 2500</strong></div>`;
    }

    res.innerHTML = html;
}
