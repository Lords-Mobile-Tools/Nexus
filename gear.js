// ==========================================
// TOOL: GEAR SIMULATOR
// ==========================================

// NOTE: GITHUB_BASE is declared in 04_troop_calculator.js (shared constant).
// If loading this file independently, declare:
// const GITHUB_BASE = "https://raw.githubusercontent.com/KaelxZenya2007/Prototype1/main/";

// ==========================================
// GEAR ICONS MAP
// ==========================================
const GEAR_ICONS = {
  "Ambrosial Cup": GITHUB_BASE + "Ambrosia%20Cup.png", "Coil Armband": GITHUB_BASE + "Coil%20Armband.jpg", "Ancient Hat": GITHUB_BASE + "Ancient%20Hat.png", "Beast Helm": GITHUB_BASE + "Beast%20Helm.png", "Blight Ring": GITHUB_BASE + "Blight%20Ring.png", "Beastly Breastplate": GITHUB_BASE + "Beastly%20BreastPlate.png", "Beastly Waist Guard": GITHUB_BASE + "Beastly%20Wasteguard.png", "Blizzard Pants": GITHUB_BASE + "Blizzard%20Pants.png", "Book of the Dead": GITHUB_BASE + "Book%20of%20the%20Dead.png", "Bubble Helm": GITHUB_BASE + "BubbleHelm.png", "Call of the Deep": GITHUB_BASE + "Call%20of%20the%20Deep.png", "Champion Armet": GITHUB_BASE + "Champion%20Armet.png", "Champion Blade": GITHUB_BASE + "Champion%20Blade.png", "Champion Blessing": GITHUB_BASE + "Champion%20Blessing.png", "Champion Boots": GITHUB_BASE + "Champion%20Boots.png", "Champion Cuirass": GITHUB_BASE + "Champion%20Cuirass.png", "Champion Blade (Cav)": GITHUB_BASE + "Champion%20Edge.png", "Champion Faith": GITHUB_BASE + "Champion%20Faith.png", "Champion GreatSword": GITHUB_BASE + "Champion%20GreatSword.png", "Champion Greaves": GITHUB_BASE + "Champion%20Greaves.png", "Champion Helm": GITHUB_BASE + "Champion%20Helm.png", "Champion Katar": GITHUB_BASE + "Champion%20Katar.png", "Champion Lamp": GITHUB_BASE + "Champion%20Lamp.png", "Champion Light": GITHUB_BASE + "Champion%20Light.png", "Champion Mail": GITHUB_BASE + "Champion%20Mail.png", "Champion Plate": GITHUB_BASE + "Champion%20Plate.png", "Champion Stride": GITHUB_BASE + "Champion%20Stride.png", "Champion Valor": GITHUB_BASE + "Champion%20Valor.png", "Champion Visor": GITHUB_BASE + "Champion%20Visor.png", "Dark Aegis": GITHUB_BASE + "Dark%20Aegis.png", "Deadly Mantle": GITHUB_BASE + "Deadly%20Mantle.png", "Decadent Sword": GITHUB_BASE + "Decadent%20Sword.png", "Devourer Helm": GITHUB_BASE + "Devourer%20Helm.png", "Dragon Fist": GITHUB_BASE + "Dragon%27s%20Fist.png", "Dragon's Iris": GITHUB_BASE + "Dragon%27s%20Iris.png", "Dragon Talon": GITHUB_BASE + "Dragon%27s%20Talon.png", "Eerie Lantern": GITHUB_BASE + "Eerie%20Lantern.png", "Eon Axe": GITHUB_BASE + "Eon%20Axe.png", "Eternal Codex": GITHUB_BASE + "Eternal%20Codex.png", "Fear Drum": GITHUB_BASE + "Fear%20Drum.png", "Firewall Plate": GITHUB_BASE + "Firewall%20Plate.png", "Frostwing Armor": GITHUB_BASE + "Frostwing%20Armor.png", "Frostwing's Breath": GITHUB_BASE + "Frostwing%27s%20Breath.png", "Frostwing Helm": GITHUB_BASE + "Frostwing%20Helm.png", "Frostwing Sword": GITHUB_BASE + "Frostwing%20Sword.png", "Gargantua Belt": GITHUB_BASE + "Gargantua%20Belt.png", "Ghostly Cane": GITHUB_BASE + "Ghastly%20Cane.png", "Hardened Carapace": GITHUB_BASE + "Hardened%20Caraspace.png", "Hedonic Cuirass": GITHUB_BASE + "Hedonic%20Cuirass.png", "Horn Cudgel": GITHUB_BASE + "Horn%20Cudgel.png", "Kraken's Anchor": GITHUB_BASE + "Kraken%27s%20Anchor.png", "Legs of the Deceiver": GITHUB_BASE + "Legs%20of%20The%20Deciever.png", "Lunar Boomerang": GITHUB_BASE + "Lunar%20Boomerang.png", "Malicious Saw": GITHUB_BASE + "Malicious%20Saw.png", "Nectar Orb": GITHUB_BASE + "Nectar%20Orb.png", "Orca Mask": GITHUB_BASE + "Orca%20Mask.png", "Polar Ring": GITHUB_BASE + "Polar%20Ring.png", "Predator Pauldrons": GITHUB_BASE + "Predator%20Pauldrons.png", "Rowdy Resolve": GITHUB_BASE + "Rowdy%20Resolve.png", "Serpent Helm": GITHUB_BASE + "Serpant%20Helm.png", "Shadow Helm": GITHUB_BASE + "Shadow%20Helm.png", "Skull Crasher": GITHUB_BASE + "SkullCrusher.png", "Spirit Axe": GITHUB_BASE + "Spirit%20Axe.png", "Stealthy Steps": GITHUB_BASE + "Stealthy%20Steps.png", "Steps of Reckoning": GITHUB_BASE + "Steps%20of%20Reckoning.png", "Storm Tasset": GITHUB_BASE + "Storm%20Assets.png", "Terror Shield": GITHUB_BASE + "Terror%20Shield.png", "Terror Slash": GITHUB_BASE + "Terror%20Slash%20%281%29.png", "Terror Vial": GITHUB_BASE + "Terror%20Vial.png", "Untamed Boots": GITHUB_BASE + "Untamed%20Boots.png", "Venom Blade": GITHUB_BASE + "Venom%20Blade.png", "Viral SwitchBlade": GITHUB_BASE + "Viral%20Switchblade.png", "Winter Mitts": GITHUB_BASE + "Winter%20Mitts.png", "Winter Parka": GITHUB_BASE + "Winter%20Parka.png", "Wyrm Rod": GITHUB_BASE + "Wyrm%20Rod.png", "Wyrm Seal": GITHUB_BASE + "Wyrm%20Seal.png", "Wyrmbone Coronet": GITHUB_BASE + "Wyrmbone%20Coronet.png"
};

function getImg(name) {
    if (GEAR_ICONS[name]) return GEAR_ICONS[name];
    return `https://placehold.co/100/1c223a/8e9bb0?text=${encodeURIComponent(name.split(' ')[0])}`;
}

// ==========================================
// GEAR DATA
// ==========================================
const GEAR_DATA = {
  Legs: [
    {name:"Champion Boots", lvl: 60, stats:{"Range ATK": 56, "Army ATK": 14, "Army Max HP": 30.8, "Travel Speed": 70}}, {name:"Champion Greaves", lvl: 60, stats:{"Cavalry ATK": 56, "Army ATK": 14, "Army Max HP": 30.8, "Travel Speed": 70}}, {name:"Champion Stride", lvl: 60, stats:{"Infantry ATK": 56, "Army ATK": 14, "Army Max HP": 30.8, "Travel Speed": 70}}, {name:"Blizzard Pants", lvl: 60, stats:{"Range ATK": 42, "Cavalry ATK": 42, "Army DEF": 14, "Army Max HP": 16.8}}, {name:"Storm Tasset", lvl: 60, stats:{"Infantry ATK": 42, "Cavalry ATK": 42, "Army DEF": 28, "Army Max HP": 14}}, {name:"Dragon Talon", lvl: 60, stats:{"Infantry ATK": 28, "Range ATK": 42, "Army Max HP": 21}}, {name:"Gargantua Belt", lvl: 60, stats:{"Cavalry ATK": 52.5, "Cavalry Max HP": 38.5, "Army DEF": 21, "Stone Production Rate": 70}}, {name:"Untamed Boots", lvl: 55, stats:{"Cavalry ATK": 28, "Cavalry DEF": 21, "Army Max HP": 21, "Travel Speed": 42}}, {name:"Legs of the Deceiver", lvl: 55, stats:{"Range ATK": 7, "Range DEF": 21, "Army ATK": 16.8}}, {name:"Beastly Waist Guard", lvl: 50, stats:{"Cavalry ATK": 22.4, "Cavalry Max HP": 16.8, "Army DEF": 16.8}}, {name:"Steps of Reckoning", lvl: 50, stats:{"Infantry ATK": 22.4, "Infantry DEF": 16.8, "Infantry Max HP": 11.2}}, {name:"Stealthy Steps", lvl: 50, stats:{"Range ATK": 22.4, "Range DEF": 28, "Army Max HP": 11.2}}
  ],
  Armor: [
    {name:"Champion Plate", lvl: 60, stats:{"Range ATK": 56, "Army DEF": 59.5, "Army Max HP": 35, "Reduce Upkeep": 72.8}}, {name:"Terror Shield", lvl: 60, stats:{"Infantry ATK": 49, "Infantry Max HP": 35, "Army Max HP": 29, "Research Speed": 11.2}}, {name:"Firewall Plate", lvl: 60, stats:{"Infantry ATK": 28, "Cavalry ATK": 42, "Siege Engine ATK": 42, "Army Max HP": 21}}, {name:"Champion Mail", lvl: 60, stats:{"Infantry ATK": 42, "Army ATK": 14, "Army DEF": 49, "Army Max HP": 21, "Reduce Upkeep": 72.8}}, {name:"Champion Cuirass", lvl: 60, stats:{"Cavalry ATK": 42, "Army ATK": 14, "Army DEF": 49, "Army Max HP": 21, "Reduce Upkeep": 72.8}}, {name:"Beastly Breastplate", lvl: 60, stats:{"Range ATK": 49, "Range Max HP": 21, "Army DEF": 28}}, {name:"Hardened Carapace", lvl: 55, stats:{"Range ATK": 35, "Cavalry ATK": 35, "Army DEF": 14}}, {name:"Hedonic Cuirass", lvl: 55, stats:{"Infantry ATK": 35, "Range ATK": 35, "Infantry Max HP": 42}}, {name:"Frostwing Armor", lvl: 50, stats:{"Infantry ATK": 11.2, "Range ATK": 11.2, "Siege Engine ATK": 17.5}}, {name:"Winter Parka", lvl: 50, stats:{"Infantry ATK": 17.5, "Cavalry DEF": 35, "Army Max HP": 21}}, {name:"Deadly Mantle", lvl: 50, stats:{"Range ATK": 28, "Trap ATK": 28, "Army DEF": 21}}, {name:"Predator Pauldrons", lvl: 50, stats:{"Cavalry ATK": 14, "Cavalry Max HP": 28, "Army DEF": 21, "Travel Speed": 35}}
  ],
  Helmet: [
    {name:"Champion Helm", lvl: 60, stats:{"Cavalry ATK": 49, "Army ATK": 14, "Army Max HP": 49, "Gold Production Rate": 105}}, {name:"Wyrmbone Coronet", lvl: 60, stats:{"Range ATK": 45.5, "Range DEF": 28, "Army Max HP": 17.5, "Research Speed": 14}}, {name:"Beast Helm", lvl: 60, stats:{"Infantry ATK": 42, "Cavalry ATK": 35, "Army Max HP": 21, "Travel Speed": 49}}, {name:"Bubble Helm", lvl: 60, stats:{"Range ATK": 42, "Cavalry ATK": 42, "Army Max HP": 28}}, {name:"Champion Visor", lvl: 60, stats:{"Infantry ATK": 35, "Range ATK": 35, "Army ATK": 14, "Army Max HP": 28, "Gold Production Rate": 105}}, {name:"Champion Armet", lvl: 60, stats:{"Range ATK": 35, "Cavalry ATK": 35, "Army ATK": 14, "Army Max HP": 28, "Gold Production Rate": 105}}, {name:"Serpent Helm", lvl: 60, stats:{"Infantry ATK": 42, "Range ATK": 42, "Infantry Max HP": 21, "Army DEF": 35}}, {name:"Ancient Hat", lvl: 55, stats:{"Range ATK": 39.2, "Range DEF": 35, "Army DEF": 21}}, {name:"Frostwing Helm", lvl: 50, stats:{"Range ATK": 12.6, "Siege Engine ATK": 10.5, "Army Max HP": 16.1}}, {name:"Shadow Helm", lvl: 50, stats:{"Infantry ATK": 14, "Trap ATK": 42, "Trap DEF": 42, "Wall DEF Boost": 21}}, {name:"Devourer Helm", lvl: 50, stats:{"Infantry ATK": 18.2, "Cavalry ATK": 18.2, "Cavalry DEF": 14, "Infantry Max HP": 7}}, {name:"Orca Mask", lvl: 50, stats:{"Range ATK": 18.2, "Cavalry ATK": 18.2, "Range DEF": 9.8, "Cavalry Max HP": 11.2}}
  ],
  "Main-Hand": [
    {name:"Champion Blade", lvl: 60, stats:{"Infantry ATK": 28, "Range ATK": 28, "Army ATK": 21, "Army DEF": 23.8, "Research Speed": 21}}, {name:"Champion GreatSword", lvl: 60, stats:{"Range ATK": 28, "Cavalry ATK": 28, "Army ATK": 21, "Army DEF": 23.8, "Research Speed": 21}}, {name:"Champion Blade (Cav)", lvl: 60, stats:{"Cavalry ATK": 49, "Army ATK": 21, "Army DEF": 23.8, "Research Speed": 21}}, {name:"Frostwing Sword", lvl: 60, stats:{"Infantry ATK": 28, "Cavalry ATK": 28, "Range ATK": 17.5}}, {name:"Skull Crasher", lvl: 60, stats:{"Range ATK": 21, "Infantry DEF": 35, "Army ATK": 28}}, {name:"Ghostly Cane", lvl: 60, stats:{"Infantry ATK": 45.5, "Infantry Max HP": 14, "Army DEF": 14}}, {name:"Eon Axe", lvl: 60, stats:{"Cavalry ATK": 52.5, "Cavalry DEF": 14, "Cavalry Max HP": 14}}, {name:"Terror Slash", lvl: 55, stats:{"Infantry ATK": 38.5, "Infantry DEF": 14, "Army Capacity": 28, "Construction Speed": 14}}, {name:"Horn Cudgel", lvl: 55, stats:{"Cavalry ATK": 42, "Cavalry DEF": 21, "Trap DEF": 49}}, {name:"Decadent Sword", lvl: 55, stats:{"Infantry ATK": 35, "Range ATK": 35, "Range DEF": 14, "Infantry Max HP": 14}}, {name:"Nectar Orb", lvl: 55, stats:{"Cavalry ATK": 35, "Range ATK": 35, "Cavalry DEF": 14, "Range Max HP": 14}}, {name:"Kraken's Anchor", lvl: 55, stats:{"Infantry ATK": 35, "Cavalry ATK": 35, "Infantry DEF": 18.2, "Cavalry Max HP": 18.2}}, {name:"Wyrm Rod", lvl: 50, stats:{"Range ATK": 35, "Range Max HP": 24.5, "Timber Production Rate": 70}}, {name:"Malicious Saw", lvl: 50, stats:{"Infantry ATK": 35, "Siege Engine ATK": 35, "Infantry DEF": 21, "Siege Engine DEF": 35}}
  ],
  "Off-Hand": [
    {name:"Champion Katar", lvl: 60, stats:{"Range ATK": 49, "Cavalry ATK": 42, "Army DEF": 28, "Training Speed": 14}}, {name:"Champion Light", lvl: 60, stats:{"Infantry ATK": 49, "Cavalry ATK": 42, "Army DEF": 28, "Training Speed": 14}}, {name:"Champion Lamp", lvl: 60, stats:{"Infantry ATK": 49, "Range ATK": 42, "Army DEF": 28, "Training Speed": 14}}, {name:"Winter Mitts", lvl: 60, stats:{"Range ATK": 14, "Infantry DEF": 45.5, "Army DEF": 35, "Army Max HP": 35}}, {name:"Eternal Codex", lvl: 60, stats:{"Cavalry ATK": 28, "Range ATK": 49, "Cavalry Max HP": 28}}, {name:"Lunar Boomerang", lvl: 60, stats:{"Cavalry ATK": 42, "Cavalry DEF": 21, "Cavalry Max HP": 21}}, {name:"Eerie Lantern", lvl: 60, stats:{"Infantry ATK": 42, "Infantry DEF": 14, "Infantry Max HP": 14}}, {name:"Spirit Axe", lvl: 60, stats:{"Infantry ATK": 35, "Cavalry ATK": 35, "Cavalry Max HP": 14, "Army DEF": 14}}, {name:"Venom Blade", lvl: 60, stats:{"Infantry ATK": 35, "Range ATK": 35, "Range DEF": 14, "Army Max HP": 14}}, {name:"Dark Aegis", lvl: 50, stats:{"Infantry ATK": 14, "Army ATK": 14}}, {name:"Dragon Fist", lvl: 50, stats:{"Cavalry ATK": 30.8, "Army Max HP": 28}}, {name:"Viral SwitchBlade", lvl: 50, stats:{"Infantry ATK": 21, "Range ATK": 21, "Siege Engine ATK": 35, "Siege Engine DEF": 28}}, {name:"Call of the Deep", lvl: 50, stats:{"Infantry ATK": 21, "Cavalry ATK": 21, "Infantry Max HP": 14, "Cavalry Max HP": 14}}
  ],
  Accessory: [
    {name:"Champion Faith", lvl: 60, stats:{"Infantry ATK": 21, "Cavalry ATK": 21, "Army ATK": 14, "Army Max HP": 35}}, {name:"Ambrosial Cup", lvl: 60, stats:{"Infantry ATK": 35, "Range ATK": 35, "Infantry Max HP": 21, "Range Max HP": 21}}, {name:"Champion Valor", lvl: 60, stats:{"Cavalry ATK": 21, "Range ATK": 21, "Army ATK": 14, "Army Max HP": 35}}, {name:"Champion Blessing", lvl: 60, stats:{"Infantry ATK": 21, "Range ATK": 21, "Army ATK": 14, "Army Max HP": 35}}, {name:"Rowdy Resolve", lvl: 60, stats:{"Cavalry ATK": 35, "Cavalry DEF": 10.5, "Cavalry Max HP": 14}}, {name:"Book of the Dead", lvl: 60, stats:{"Infantry ATK": 35, "Cavalry ATK": 35, "Cavalry DEF": 28, "Infantry Max HP": 21}}, {name:"Polar Ring", lvl: 60, stats:{"Cavalry ATK": 35, "Range ATK": 35, "Cavalry Max HP": 21, "Range Max HP": 21}}, {name:"Frostwing's Breath", lvl: 55, stats:{"Infantry ATK": 11.2, "Cavalry ATK": 11.2, "Gold Production Rate": 70}}, {name:"Burning Scroll", lvl: 55, stats:{"Army ATK": 12.6, "Army Max HP": 12.6, "Timber Production Rate": 49}}, {name:"Dragon's Iris", lvl: 55, stats:{"Cavalry ATK": 14, "Range ATK": 14, "Army Max HP": 14}}, {name:"Terror Vial", lvl: 50, stats:{"Infantry ATK": 22.4, "Infantry Max HP": 7, "Army DEF": 11.2, "Ore Production Rate": 49}}, {name:"Fear Drum", lvl: 50, stats:{"Cavalry ATK": 22.4, "Siege Engine ATK": 14, "Cavalry Max HP": 7.7, "Gold Production Rate": 49}}, {name:"Blight Ring", lvl: 60, stats:{"Range ATK": 19.6, "Army DEF": 21, "Army Max HP": 21, "Wall DEF Boost": 35}}, {name:"Wyrm Seal", lvl: 55, stats:{"Range ATK": 22.4, "Siege Engine ATK": 21, "Army Max HP": 11.2, "Stone Production Rate": 49}}, {name:"Coil Armband", lvl: 50, stats:{"Infantry ATK": 18.2, "Range ATK": 18.2, "Infantry DEF": 14, "Range Max HP": 11.2}}
  ]
};

// ==========================================
// JEWEL DATA
// ==========================================
const JEWEL_DATA = [
  { name: "Champion Jewel", img: GITHUB_BASE + "Champion%20Jewel.jpg", stats: { "Travel Speed": 20, "Army Max HP": 15 } },
  { name: "Infantry ATK", img: GITHUB_BASE + "Infantry%20ATK%20Jewel.jpg", stats: { "Infantry ATK": 20 } },
  { name: "Range ATK", img: GITHUB_BASE + "Range%20ATK%20Jewel.jpg", stats: { "Range ATK": 20 } },
  { name: "Cavalry ATK", img: GITHUB_BASE + "Cavalry%20ATK%20Jewel.jpg", stats: { "Cavalry ATK": 20 } },
  { name: "Terror", img: GITHUB_BASE + "Terror%20Jewel.jpg", stats: { "Infantry ATK": 10, "Infantry DEF": 10 } },
  { name: "Wyrm", img: GITHUB_BASE + "Wyrm%20Jewel.jpg", stats: { "Range ATK": 10, "Range DEF": 10 } },
  { name: "Gargantua", img: GITHUB_BASE + "Gargantua%20Jewel.jpg", stats: { "Cavalry ATK": 10, "Cavalry DEF": 10 } },
  { name: "Trojan", img: GITHUB_BASE + "Trojan%20Jewel.jpg", stats: { "Infantry Max HP": 15, "Travel Speed": 5 } },
  { name: "Grim", img: GITHUB_BASE + "Grim%20Jewel.jpg", stats: { "Range Max HP": 15, "Travel Speed": 5 } },
  { name: "Saber", img: GITHUB_BASE + "Saber%20Jewel.jpg", stats: { "Cavalry Max HP": 15, "Travel Speed": 5 } },
  { name: "Infantry DEF", img: GITHUB_BASE + "Infantry%20DEF.jpg", stats: { "Infantry DEF": 20 } },
  { name: "Range DEF", img: GITHUB_BASE + "Range%20DEF.jpg", stats: { "Range DEF": 20 } },
  { name: "Cavalry DEF", img: GITHUB_BASE + "Cavalry%20DEF.jpg", stats: { "Cavalry DEF": 20 } },
  { name: "Army Assault", stats: { "Army ATK": 10 } },
  { name: "IC Assault", stats: { "Infantry ATK": 10, "Cavalry ATK": 5 } },
  { name: "RI Assault", stats: { "Range ATK": 10, "Infantry ATK": 5 } },
  { name: "CI Assault", stats: { "Cavalry ATK": 10, "Range ATK": 5 } },
  { name: "Royal Infantry", stats: { "Infantry ATK": 10, "Infantry Max HP": 10 } },
  { name: "Royal Range", stats: { "Range ATK": 10, "Range Max HP": 10 } },
  { name: "Royal Cavalry", stats: { "Cavalry ATK": 10, "Cavalry Max HP": 10 } },
  { name: "Falcon", stats: { "Infantry ATK": 15, "Range ATK": 15 } },
  { name: "Dragon Infantry", img: GITHUB_BASE + "Dragon%20Infantry%20ATK.jpg", stats: { "Infantry ATK": 15 } },
  { name: "Dragon Range", img: GITHUB_BASE + "Dragon%20Range%20ATK.jpg", stats: { "Range ATK": 15 } },
  { name: "Dragon Cavalry", img: GITHUB_BASE + "Dragon%20Cavalry%20ATK.jpg", stats: { "Cavalry ATK": 15 } }
];

// ==========================================
// SIGIL DATA
// ==========================================
const SIGIL_DATA = [
  { name: "Wolfpack Sigil", img: GITHUB_BASE + "Wolfpack_Sigil.jpg", stats: { "Pack Attack": 40 } },
  { name: "Ursa Dusk Sigil", img: GITHUB_BASE + "Ursa_Dusk_Sigil.jpg", stats: { "Range ATK (Wonder)": 10, "Range DEF (Wonder)": 10 } },
  { name: "Ursa Fury Sigil", img: GITHUB_BASE + "Ursa_Fury_Sigil.jpg", stats: { "Cavalry ATK (Wonder)": 10, "Cavalry DEF (Wonder)": 10 } },
  { name: "Ursa Skull Sigil", img: GITHUB_BASE + "Ursa_Skull_Sigil.jpg", stats: { "Infantry ATK (Wonder)": 10, "Range DEF (Wonder)": 10 } },
  { name: "Tigris Skull Sigil", img: GITHUB_BASE + "Tigris_Skull_Sigil.jpg", stats: { "Infantry ATK (Wonder)": 10, "Wonder Travel Speed": 10 } },
  { name: "Tigris Dusk Sigil", img: GITHUB_BASE + "Tigris_Dusk_Sigil.jpg", stats: { "Range ATK (Wonder)": 10, "Wonder Travel Speed": 10 } },
  { name: "Tigris Fury Sigil", img: GITHUB_BASE + "Tigris_Fury_Sigil.jpg", stats: { "Cavalry ATK (Wonder)": 10, "Wonder Travel Speed": 10 } }
];

// ==========================================
// GEAR SIMULATOR STATE & CONFIG
// ==========================================
const SLOT_CONFIG = ["Legs", "Armor", "Helmet", "Main-Hand", "Off-Hand", "Accessory1", "Accessory2", "Accessory3"];

let activeSetIdx = 0;
let sets = [Array(8).fill(null), Array(8).fill(null), Array(8).fill(null)];
let gearSortDesc = true;
let currentOpenSlot = null;

// ==========================================
// TEMPER FUNCTIONS
// ==========================================
function getTemperC(tier, isChamp) {
    if (tier === 0) return 0;
    let c = 0;
    if (isChamp) {
        if (tier <= 3) c = tier;
        else if (tier <= 6) c = 3 + (tier - 3) * 2;
        else if (tier <= 9) c = 9 + (tier - 6) * 3;
        else if (tier <= 12) c = 18 + (tier - 9) * 4;
        else c = 30;
    } else {
        if (tier <= 3) c = tier;
        else if (tier <= 6) c = 3 + (tier - 3) * 2;
        else if (tier <= 9) c = 9 + (tier - 6) * 3;
        else c = 18 + (tier - 9) * 4;
    }
    return c;
}

function getTemperedValue(baseVal, name, tier, lvl) {
    if (tier === 0 || lvl < 50) return baseVal;
    let isChamp = name.toLowerCase().includes("champion");
    let c = getTemperC(tier, isChamp);
    let divisor = isChamp ? 50 : 70;
    return baseVal + ((baseVal / divisor) * c);
}

function setTemper(slotIdx, val) {
    if (sets[activeSetIdx][slotIdx]) {
        sets[activeSetIdx][slotIdx].temperTier = parseInt(val);
        render();
    }
}

// ==========================================
// SET & SLOT MANAGEMENT
// ==========================================
function switchSet(idx) {
  activeSetIdx = idx;
  document.querySelectorAll('.tab').forEach((t, i) => t.classList.toggle('active', i === idx));
  render();
}

function resetEntireSet() {
  if(confirm("Are you sure you want to clear ALL gear in this set?")) {
    sets[activeSetIdx] = Array(8).fill(null);
    render();
  }
}

function clearSingleSlot(idx) {
  sets[activeSetIdx][idx] = null;
  render();
}

function toggleGearSort() {
  gearSortDesc = !gearSortDesc;
  if(currentOpenSlot !== null) {
      openGearSelection(currentOpenSlot);
  }
}

// ==========================================
// GEAR SELECTION MODAL
// ==========================================
function openGearSelection(slotIdx) {
  currentOpenSlot = slotIdx;
  const type = SLOT_CONFIG[slotIdx].replace(/\d/g, '');
  const list = GEAR_DATA[type] || [];

  const body = document.getElementById('modalBody');
  document.getElementById('modalTitle').textContent = `Select ${type}`;

  let sortedList = list.map((gear, origIdx) => ({...gear, origIdx}))
                       .sort((a,b) => gearSortDesc ? b.lvl - a.lvl : a.lvl - b.lvl);

  body.innerHTML = sortedList.map(item => {
    let statsHtml = Object.entries(item.stats).map(([k,v]) => `<span style="color:#b6bddf;">${k}:</span> <strong style="color:#fff;">${v}%</strong>`).join('<br>');
    return `
    <div class="card" onclick="selectGear(${slotIdx}, '${type}', ${item.origIdx})">
      <img src="${item.img || getImg(item.name)}" onerror="this.src='https://placehold.co/100/1c223a/8e9bb0?text=Img'">
      <div style="width: 100%;">
        <div style="font-weight: 800; color: #4da6ff; font-size: 15px; margin-bottom: 2px;">${item.name}</div>
        <div style="color: #8e9bb0; font-size: 11px; margin-bottom: 6px; font-weight: bold; text-transform: uppercase;">Lvl ${item.lvl || 60}</div>
        <div style="font-size: 12px; line-height: 1.5;">${statsHtml}</div>
      </div>
    </div>
  `}).join('');

  document.getElementById('mainModal').classList.add('open');
}

function selectGear(slotIdx, type, dataIdx) {
  const gear = JSON.parse(JSON.stringify(GEAR_DATA[type][dataIdx]));
  gear.jewels = [null, null, null];
  gear.sigil = null;
  gear.temperTier = 0;
  sets[activeSetIdx][slotIdx] = gear;
  closeModal();
  render();
}

// ==========================================
// SOCKET MENU (JEWELS & SIGILS)
// ==========================================
function getEquippedJewelNames(slotIdx, excludeJewelIdx = null) {
  const gear = sets[activeSetIdx][slotIdx];
  if (!gear || !Array.isArray(gear.jewels)) return [];
  return gear.jewels.filter((j, idx) => j && idx !== excludeJewelIdx).map(j => j.name);
}

function openSocketMenu(slotIdx) {
  const gear = sets[activeSetIdx][slotIdx];
  if (!gear) return;

  const body = document.getElementById('modalBody');
  document.getElementById('modalTitle').textContent = "Manage Sockets";

  let html = `<div class="preview-area" style="display:flex; align-items:center; gap:15px;">
                <img src="${gear.img || getImg(gear.name)}" style="width:50px; height:50px; border-radius:6px; border:1px solid rgba(77, 166, 255, 0.3);" onerror="this.src='https://placehold.co/100/1c223a/8e9bb0?text=Img'">
                <div><strong style="font-size:16px; color:#4da6ff;">${gear.name}</strong><br><span style="font-size:12px; color:var(--muted)">Select a socket below to equip.</span></div>
              </div>`;

  html += `<div style="color: #4da6ff; font-weight: bold; font-size: 12px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Jewel Sockets (Max 3)</div>`;
  html += `<div class="jewel-grid">`;
  gear.jewels.forEach((j, i) => {
    let iconHtml = (j && j.img)
        ? `<img src="${j.img}" style="width:24px; height:24px; border-radius:4px; margin-bottom:5px; border: 1px solid #4da6ff; box-shadow: 0 0 5px rgba(77,166,255,0.3); object-fit: cover;">`
        : `<div style="font-size:20px; margin-bottom:5px; color:${j ? '#4da6ff' : '#444'}; text-shadow:${j ? '0 0 5px rgba(77,166,255,0.5)' : 'none'};">♦</div>`;

    html += `<div class="socket" style="background:${j ? '#222a46' : '#1c223a'}; border-color:${j ? '#4da6ff' : 'rgba(255,255,255,0.05)'}; box-shadow:${j ? '0 0 10px rgba(77,166,255,0.1)' : 'none'};" onclick="chooseJewelForSlot(${slotIdx}, ${i})">
                ${iconHtml}
                <span style="color:${j ? '#fff' : '#8e9bb0'}; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${j ? j.name : 'Empty Socket'}</span>
             </div>`;
  });
  html += `</div>`;

  html += `<div style="color: #b08dff; font-weight: bold; font-size: 12px; margin: 20px 0 5px 0; text-transform: uppercase; letter-spacing: 0.5px;">Sigil Socket (Max 1)</div>`;
  let sig = gear.sigil;
  let sigIconHtml = (sig && sig.img)
      ? `<img src="${sig.img}" style="width:28px; height:28px; border-radius:4px; margin-bottom:5px; border: 1px solid #b08dff; box-shadow: 0 0 5px rgba(176,141,255,0.3); object-fit: cover;" onerror="this.style.display='none'">`
      : `<div style="font-size:24px; margin-bottom:5px; color:${sig ? '#b08dff' : '#444'}; text-shadow:${sig ? '0 0 5px rgba(176,141,255,0.5)' : 'none'};">✧</div>`;

  html += `<div class="sigil-box">
              <div class="socket" style="width: 100%; max-width: 200px; padding: 15px 10px; background:${sig ? '#2a1e46' : '#1c223a'}; border-color:${sig ? '#b08dff' : 'rgba(255,255,255,0.1)'}; border-width: 2px; box-shadow:${sig ? '0 0 10px rgba(176,141,255,0.2)' : 'none'};" onclick="chooseSigilForSlot(${slotIdx})">
                  ${sigIconHtml}
                  <span style="color:${sig ? '#fff' : '#8e9bb0'}; font-size: 13px; font-weight: 800; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${sig ? sig.name : 'Equip Sigil'}</span>
              </div>
           </div>`;

  html += `<div style="margin-top: 25px;"><button class="btn btn-clear" style="padding: 10px; border-radius: 8px;" onclick="clearAllSockets(${slotIdx})">Remove All Jewels & Sigils</button></div>`;

  body.innerHTML = html;
  document.getElementById('mainModal').classList.add('open');
}

function clearAllSockets(slotIdx) {
  if(sets[activeSetIdx][slotIdx]) {
    sets[activeSetIdx][slotIdx].jewels = [null, null, null];
    sets[activeSetIdx][slotIdx].sigil = null;
    render();
    openSocketMenu(slotIdx);
  }
}

// ==========================================
// JEWEL SELECTION & APPLICATION
// ==========================================
function chooseJewelForSlot(slotIdx, jewelIdx) {
  const gear = sets[activeSetIdx][slotIdx];
  if (!gear) return;

  const usedNames = new Set(getEquippedJewelNames(slotIdx, jewelIdx));
  const currentJewel = gear.jewels[jewelIdx];

  const body = document.getElementById('modalBody');
  document.getElementById('modalTitle').textContent = "Choose Jewel";

  let currentJewelIcon = currentJewel && currentJewel.img
    ? `<img src="${currentJewel.img}" style="width:20px; height:20px; vertical-align:middle; border-radius:3px; margin-right:5px; border:1px solid rgba(255,255,255,0.2);">`
    : '';

  body.innerHTML = `
    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
        <button class="btn" style="background: #2c3558; border: 1px solid rgba(255,255,255,0.1);" onclick="openSocketMenu(${slotIdx})">← Back to Sockets</button>
        <button class="btn btn-clear" onclick="applyJewel(${slotIdx}, ${jewelIdx}, -1)">Unequip Jewel</button>
    </div>
    <div class="preview-area" style="margin-bottom: 15px; padding: 15px; border-left: 5px solid #ffcc00; background: #1a1500; border-radius: 8px;">
      <h3 style="color:#ffcc00; margin: 0 0 8px 0; font-size: 16px; letter-spacing: 1px;">SELECTING JEWEL FOR SOCKET ${jewelIdx + 1}</h3>
      Current: ${currentJewelIcon} <strong style="color:#fff; font-size: 14px; vertical-align:middle;">${currentJewel ? currentJewel.name : "Empty"}</strong>
    </div>
  `;

  body.innerHTML += JEWEL_DATA.map((j, i) => {
    const alreadyUsed = usedNames.has(j.name);
    const isCurrent = currentJewel && currentJewel.name === j.name;

    let statsStr = Object.entries(j.stats).map(([k,v]) => `<span style="color:#8e9bb0;">${k}</span> <strong style="color:#fff;">+${v}%</strong>`).join('<br>');
    let imgTag = j.img
        ? `<img src="${j.img}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1);" onerror="this.style.display='none'">`
        : `<div style="width: 40px; height: 40px; border-radius: 6px; background: #121726; display: flex; align-items: center; justify-content: center; font-size: 16px; color: #4da6ff; border: 1px solid rgba(255,255,255,0.1);">♦</div>`;

    return `
    <div class="card" onclick="${alreadyUsed && !isCurrent ? '' : `applyJewel(${slotIdx}, ${jewelIdx}, ${i})`}" style="
         opacity:${alreadyUsed && !isCurrent ? '0.3' : '1'}; cursor:${alreadyUsed && !isCurrent ? 'not-allowed' : 'pointer'};
         border-color:${isCurrent ? '#4da6ff' : 'rgba(255,255,255,0.05)'}; background:${isCurrent ? '#222a46' : '#1c223a'}; display: flex; align-items: center; gap: 15px; padding: 12px;">
      ${imgTag}
      <div style="width: 100%;">
         <strong style="color:${isCurrent ? '#4da6ff' : '#fff'}; font-size: 14px;">${j.name} Jewel</strong>
         ${alreadyUsed && !isCurrent ? '<span style="color:#ff4d4d; font-size:10px; margin-left:5px; font-weight:bold;">[EQUIPPED]</span>' : ''}
         ${isCurrent ? '<span style="color:#4da6ff; font-size:10px; margin-left:5px; font-weight:bold;">[SELECTED]</span>' : ''}
         <div style="font-size: 12px; margin-top: 6px; line-height: 1.4;">${statsStr}</div>
      </div>
    </div>
  `}).join('');
}

function applyJewel(slotIdx, jewelIdx, dataIdx) {
  const gear = sets[activeSetIdx][slotIdx];
  if (!gear) return;

  if (dataIdx === -1) {
    gear.jewels[jewelIdx] = null;
    render(); openSocketMenu(slotIdx); return;
  }

  const selected = JEWEL_DATA[dataIdx];
  const usedNames = new Set(getEquippedJewelNames(slotIdx, jewelIdx));

  if (usedNames.has(selected.name)) {
    alert(`"${selected.name}" is already equipped in another socket on this gear. You cannot stack identical jewels.`);
    return;
  }

  gear.jewels[jewelIdx] = JSON.parse(JSON.stringify(selected));
  showToast("Jewel Equipped!"); // Toast notification: Jewel equipped
  render();

  let nextEmpty = -1;
  for(let i=0; i<3; i++) {
      if(!gear.jewels[i]) { nextEmpty = i; break; }
  }

  if (nextEmpty !== -1) {
      chooseJewelForSlot(slotIdx, nextEmpty);
  } else {
      openSocketMenu(slotIdx);
  }
}

// ==========================================
// SIGIL SELECTION & APPLICATION
// ==========================================
function chooseSigilForSlot(slotIdx) {
  const gear = sets[activeSetIdx][slotIdx];
  if (!gear) return;

  const currentSigil = gear.sigil;
  const body = document.getElementById('modalBody');
  document.getElementById('modalTitle').textContent = "Choose Sigil";

  let currentSigilIcon = currentSigil && currentSigil.img
    ? `<img src="${currentSigil.img}" style="width:20px; height:20px; vertical-align:middle; border-radius:3px; margin-right:5px; border:1px solid rgba(255,255,255,0.2);">`
    : '';

  body.innerHTML = `
    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
        <button class="btn" style="background: #2c3558; border: 1px solid rgba(255,255,255,0.1);" onclick="openSocketMenu(${slotIdx})">← Back to Sockets</button>
        <button class="btn btn-clear" onclick="applySigil(${slotIdx}, -1)">Unequip Sigil</button>
    </div>
    <div class="preview-area" style="margin-bottom: 15px; padding: 15px; border-left: 5px solid #b08dff; background: #1a1526; border-radius: 8px;">
      <h3 style="color:#b08dff; margin: 0 0 8px 0; font-size: 16px; letter-spacing: 1px;">SELECTING SIGIL</h3>
      Current: ${currentSigilIcon} <strong style="color:#fff; font-size: 14px; vertical-align:middle;">${currentSigil ? currentSigil.name : "Empty"}</strong>
    </div>
  `;

  body.innerHTML += SIGIL_DATA.map((s, i) => {
    const isCurrent = currentSigil && currentSigil.name === s.name;

    let statsStr = Object.entries(s.stats).map(([k,v]) => `<span style="color:#8e9bb0;">${k}</span> <strong style="color:#fff;">+${v}%</strong>`).join('<br>');
    let imgTag = s.img
        ? `<img src="${s.img}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1);" onerror="this.style.display='none'">`
        : `<div style="width: 40px; height: 40px; border-radius: 6px; background: #121726; display: flex; align-items: center; justify-content: center; font-size: 16px; color: #b08dff; border: 1px solid rgba(255,255,255,0.1);">✧</div>`;

    return `
    <div class="card" onclick="applySigil(${slotIdx}, ${i})" style="
         border-color:${isCurrent ? '#b08dff' : 'rgba(255,255,255,0.05)'}; background:${isCurrent ? '#2a1e46' : '#1c223a'}; display: flex; align-items: center; gap: 15px; padding: 12px;">
      ${imgTag}
      <div style="width: 100%;">
         <strong style="color:${isCurrent ? '#b08dff' : '#fff'}; font-size: 14px;">${s.name}</strong>
         ${isCurrent ? '<span style="color:#b08dff; font-size:10px; margin-left:5px; font-weight:bold;">[SELECTED]</span>' : ''}
         <div style="font-size: 12px; margin-top: 6px; line-height: 1.4;">${statsStr}</div>
      </div>
    </div>
  `}).join('');
}

function applySigil(slotIdx, dataIdx) {
  const gear = sets[activeSetIdx][slotIdx];
  if (!gear) return;

  if (dataIdx === -1) {
    gear.sigil = null;
  } else {
    gear.sigil = JSON.parse(JSON.stringify(SIGIL_DATA[dataIdx]));
    showToast("Sigil Equipped!"); // Toast notification: Sigil equipped
  }

  render();
  openSocketMenu(slotIdx);
}

// ==========================================
// MODAL CLOSE
// ==========================================
function closeModal() { document.getElementById('mainModal').classList.remove('open'); currentOpenSlot = null; }

// ==========================================
// STAT HELPERS
// ==========================================
function isEconomyStat(stat) { return /Speed|Production|Upkeep|Capacity/i.test(stat); }

const STAT_ORDER = ["Infantry ATK", "Range ATK", "Cavalry ATK", "Infantry Max HP", "Range Max HP", "Cavalry Max HP", "Infantry DEF", "Range DEF", "Cavalry DEF", "Army ATK", "Army Max HP", "Army DEF"];

function sortStatsFunction(a, b) {
    let idxA = STAT_ORDER.indexOf(a[0]); let idxB = STAT_ORDER.indexOf(b[0]);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1; if (idxB !== -1) return 1;
    return a[0].localeCompare(b[0]);
}

// ==========================================
// RENDER (MAIN UI UPDATE)
// ==========================================
function render() {
  const strTotals = {};
  const ecoTotals = {};
  const sigTotals = {};

  sets[activeSetIdx].forEach(item => {
    if(!item) return;

    Object.entries(item.stats).forEach(([k,v]) => {
        let finalVal = getTemperedValue(v, item.name, item.temperTier || 0, item.lvl);
        if(isEconomyStat(k)) ecoTotals[k] = (ecoTotals[k]||0) + finalVal;
        else strTotals[k] = (strTotals[k]||0) + finalVal;
    });

    item.jewels.forEach(j => {
        if(j && j.stats) {
            Object.entries(j.stats).forEach(([statName, statValue]) => {
                if(isEconomyStat(statName)) ecoTotals[statName] = (ecoTotals[statName]||0) + statValue;
                else strTotals[statName] = (strTotals[statName]||0) + statValue;
            });
        }
    });

    if(item.sigil && item.sigil.stats) {
        Object.entries(item.sigil.stats).forEach(([statName, statValue]) => {
            sigTotals[statName] = (sigTotals[statName]||0) + statValue;
        });
    }
  });

  const statsBox = document.getElementById('statsDisplay');
  const sortedStr = Object.entries(strTotals).sort(sortStatsFunction);
  const sortedEco = Object.entries(ecoTotals).sort(sortStatsFunction);
  const sortedSig = Object.entries(sigTotals).sort(sortStatsFunction);

  const strHtml = sortedStr.length ? sortedStr.map(([k,v]) => `<div class="stat-row"><span>${k}</span><strong>${v.toFixed(2).replace(/\.00$/, '')}%</strong></div>`).join('') : '<div style="color:var(--muted); text-align:center; font-size:12px; margin-top:10px; font-style: italic;">No Combat Stats Active</div>';
  const ecoHtml = sortedEco.length ? sortedEco.map(([k,v]) => `<div class="stat-row"><span>${k}</span><strong>${v.toFixed(2).replace(/\.00$/, '')}%</strong></div>`).join('') : '<div style="color:var(--muted); text-align:center; font-size:12px; margin-top:10px; font-style: italic;">No Economy Stats Active</div>';
  const sigHtml = sortedSig.length ? sortedSig.map(([k,v]) => `<div class="stat-row"><span>${k}</span><strong>${v.toFixed(2).replace(/\.00$/, '')}%</strong></div>`).join('') : '<div style="color:var(--muted); text-align:center; font-size:12px; margin-top:10px; font-style: italic;">No Sigil Stats Active</div>';

  statsBox.innerHTML = `
    <div class="stat-col"><div class="stat-header" style="color: #ff6666;">⚔️ Combat</div>${strHtml}</div>
    <div class="stat-col-divider"></div>
    <div class="stat-col"><div class="stat-header" style="color: #66ff99;">🛡️ Economy</div>${ecoHtml}</div>
    <div class="stat-col-divider"></div>
    <div class="stat-col"><div class="stat-header" style="color: #b08dff;">✧ Sigils</div>${sigHtml}</div>
  `;

  const grid = document.getElementById('slotsGrid');
  grid.innerHTML = SLOT_CONFIG.map((label, i) => {
    const item = sets[activeSetIdx][i];

    let temperOptions = '';
    if (item && item.lvl >= 50) {
        for(let t = 0; t <= 15; t++) {
            temperOptions += `<option value="${t}" ${item.temperTier === t ? 'selected' : ''}>Temper: ${t}</option>`;
        }
    }

    return `
      <div class="slot">
        <div class="slot-label">${label}</div>
        ${item ? `
          <div class="img-box" onclick="openGearSelection(${i})" style="cursor:pointer;" title="Swap gear">
            <img src="${item.img || getImg(item.name)}" onerror="this.src='https://placehold.co/100/1c223a/8e9bb0?text=Img'">
          </div>
          <div class="actions-group">
            ${item.lvl >= 50 ? `<select class="temper-select" onchange="setTemper(${i}, this.value)">${temperOptions}</select>` : ''}
            <button class="btn" onclick="openSocketMenu(${i})" style="${(item.jewels.some(j=>j) || item.sigil) ? 'border: 1px solid #4da6ff; box-shadow: 0 0 5px rgba(77,166,255,0.3);' : ''}">Sockets</button>
            <button class="btn btn-clear" onclick="clearSingleSlot(${i})">Clear</button>
          </div>
        ` : `
          <div class="img-box empty-box" onclick="openGearSelection(${i})" title="Equip item"><div class="btn-plus">+</div></div>
          <div class="actions-group"></div>
        `}
      </div>
    `;
  }).join('');
}

// ==========================================
// INITIALIZATION
// ==========================================
render();
