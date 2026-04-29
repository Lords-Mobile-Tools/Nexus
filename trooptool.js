// ==========================================
// TOOL: TROOP CALCULATOR
// ==========================================

const ICONS = {
    army: "Picsart_26-03-19_23-38-15-683.png", might: "Picsart_26-03-17_22-24-27-109.png",
    food: "Picsart_26-03-17_22-31-19-118.png", stone: "Picsart_26-03-17_22-31-37-917.png",
    wood: "Picsart_26-03-17_22-31-57-627.png", ore: "Picsart_26-03-17_22-32-16-895.png", gold: "Picsart_26-03-17_22-32-37-505.png"
};

const tiers = [1,2,3,4], types = ["Infantry", "Range", "Cavalry", "Siege"];
const mPwr = {1:2, 2:8, 3:24, 4:36}, tBase = {1:15, 2:30, 3:60, 4:120};
const tRes = { 1: {f:50, base:50, g:0}, 2: {f:100, base:100, g:5}, 3: {f:150, base:150, g:10}, 4: {f:1000, base:1000, g:500} };

const GITHUB_BASE = "https://raw.githubusercontent.com/KaelxZenya2007/Prototype1/main/";

const TROOP_ICONS = {
    1: { "Infantry": GITHUB_BASE + "Grunt.jpg", "Range": GITHUB_BASE + "Archer.jpg", "Cavalry": GITHUB_BASE + "Cataphract.jpg", "Siege": GITHUB_BASE + "Balista.jpg" },
    2: { "Infantry": GITHUB_BASE + "Gladiator.jpg", "Range": GITHUB_BASE + "SharpShooter.jpg", "Cavalry": GITHUB_BASE + "Reptalian.jpg", "Siege": GITHUB_BASE + "Catapult.jpg" },
    3: { "Infantry": GITHUB_BASE + "Royal%20Guard.jpg", "Range": GITHUB_BASE + "Stealth%20Sniper.jpg", "Cavalry": GITHUB_BASE + "Royal%20Cavalry.jpg", "Siege": GITHUB_BASE + "Destroyer.jpg" },
    4: { "Infantry": GITHUB_BASE + "Heroic%20Figther.jpg", "Range": GITHUB_BASE + "Heroic%20Canooneer.jpg", "Cavalry": GITHUB_BASE + "Ancient%20Drake%20Rider.jpg", "Siege": GITHUB_BASE + "Destroyer.jpg" }
};

function formatAbbr(n) {
    if (n >= 1e9) return (n/1e9).toFixed(1) + 'b';
    if (n >= 1e6) return (n/1e6).toFixed(1) + 'm';
    return Math.floor(n).toLocaleString();
}

function updateLiveStats() {
    let a = 0, m = 0;
    document.querySelectorAll('.troop-box input').forEach(i => {
        let v = parseInt(i.value.replace(/,/g,'')) || 0;
        a += v; m += v * mPwr[i.dataset.t];
    });
    document.getElementById('live-a').innerText = formatAbbr(a);
    document.getElementById('live-m').innerText = formatAbbr(m);
}

function calculateTroops() {
    const spd = parseFloat(document.getElementById('tSpeed').value) || 0;
    const s12 = (parseFloat(document.getElementById('s12').value) || 0)/100;
    const s34 = (parseFloat(document.getElementById('s34').value) || 0)/100;
    const mult = (1 + (spd/100)) * (document.getElementById('troopEvent').checked ? 1.2 : 1);
    let r = { a:0, m:0, f:0, w:0, s:0, o:0, g:0, sec:0 };

    tiers.forEach(t => {
        let sub = t <= 2 ? s12 : s34;
        let multSub = 1 - sub;
        types.forEach(ty => {
            let q = parseInt(document.getElementById(`t${t}${ty}`).value.replace(/,/g,'')) || 0;
            if(q <= 0) return;
            r.a += q; r.m += q * mPwr[t]; r.sec += (q * tBase[t]) / mult;

            let food = tRes[t].f, gold = tRes[t].g, base = tRes[t].base;
            let w = 0, s = 0, o = 0;

            if (ty === "Range") { s = base; w = base; }
            else if (ty === "Infantry") { w = base; o = base; }
            else if (ty === "Cavalry") { s = base; o = base; }
            else if (ty === "Siege") { w = base; s = base; o = base; }

            r.f += (food * multSub) * q; r.w += (w * multSub) * q; r.s += (s * multSub) * q; r.o += (o * multSub) * q; r.g += (gold * multSub) * q;
        });
    });

    let sT = Math.ceil(r.sec);
    let d = Math.floor(sT/86400), h = Math.floor((sT%86400)/3600), m = Math.floor((sT%3600)/60), s = sT%60;
    const line = (key, label, val) => `<div><img src="${ICONS[key]}" class="game-icon" onerror="this.style.display='none'"> ${label}</div><span>${formatAbbr(val)}</span>`;

    let content = `<h3>Precise Speeds Up Needed</h3><div class='precise-time'>${d}d ${h}h ${m}m ${s}s</div><div class='resultGrid'>` +
        line('army', 'Army', r.a) + line('might', 'Might', r.m) + line('food', 'Food', r.f) +
        line('stone', 'Stone', r.s) + line('wood', 'Wood', r.w) + line('ore', 'Ore', r.o) + line('gold', 'Gold', r.g) +
        `</div><div class='totalRow'><div>EST. DAYS</div><span>${sT > 0 ? d+1 : 0} Days</span></div>`;

    showResult(content);
}

// ==========================================
// INITIALIZATION: Build Troop Grid & Load Icons
// ==========================================
const tierContainer = document.getElementById('tier-container');
tiers.forEach(t => {
    let row = document.createElement('div'); row.className = 'tier-row';
    row.innerHTML = `<div class="tier-header">TIER ${t}</div><div class="tier-grid"></div>`;
    types.forEach(ty => {
        let box = document.createElement('div'); box.className = 'troop-box';
        box.innerHTML = `
            <img src="${TROOP_ICONS[t][ty]}" class="troop-img" alt="T${t} ${ty}" onerror="this.style.display='none'">
            <input type="text" id="t${t}${ty}" data-t="${t}" placeholder="0">
        `;
        box.querySelector('input').addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g,'');
            e.target.value = v ? Number(v).toLocaleString() : '';
            updateLiveStats();
        });
        row.querySelector('.tier-grid').appendChild(box);
    });
    tierContainer.appendChild(row);
});

// Load Live Review Icons into header
document.getElementById('h-army').src = ICONS.army;
document.getElementById('h-might').src = ICONS.might;
