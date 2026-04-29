// ==========================================
// TOOL: SPEED UP CALCULATOR
// ==========================================
function calculateSpeed(){
    let multiplier = document.getElementById("speedEvent").value;
    let totalMinutes = parseInput("d1")*1 + parseInput("d5")*5 + parseInput("d10")*10 + parseInput("d15")*15 + parseInput("d30")*30 +
                       parseInput("h1")*60 + parseInput("h3")*180 + parseInput("h8")*480 + parseInput("h15")*900 + parseInput("h24")*1440 +
                       parseInput("d3")*4320 + parseInput("d7")*10080 + parseInput("d14")*20160 + parseInput("d30s")*43200;
    totalMinutes *= multiplier;
    let days = Math.floor(totalMinutes/1440), hours = Math.floor((totalMinutes%1440)/60), mins = Math.floor(totalMinutes%60);
    showResult("<h3>Total Speed</h3><div class='precise-time'>" + days + "d " + hours + "h " + mins + "m</div>");
}

// ==========================================
// TOOL: GEM CALCULATOR
// ==========================================
function calculateGems(){
    let colo=parseInput("colo"), guild=parseInput("guild"), monster=parseInput("monster");

    let evBase = parseInput("eventgems") * 4;
    let p = parseInput("kParagon") * 3;
    let h = parseInput("hellEv") * 10;
    let g = parseInput("gDuel") * 2;
    let o = parseInput("otherEv");
    let rEvent = evBase + p + h + g + o;

    let tr=parseInput("treasure"), ba=parseInput("basic"), bo=parseInput("bonus");

    let rColo=Math.floor(colo*8*30), rGuild=Math.floor(guild*30), rMonster=Math.floor(monster*15), rTreasure=Math.floor(tr*(100+ba+bo)/100);
    let total = rColo + rGuild + rMonster + rEvent + rTreasure;
    showResult("<h3>30-Day Forecast</h3><div class='resultGrid'><div>Colosseum</div><span>"+rColo.toLocaleString()+"</span><div>Guild</div><span>"+rGuild.toLocaleString()+"</span><div>Monster</div><span>"+rMonster.toLocaleString()+"</span><div>Event</div><span>"+rEvent.toLocaleString()+"</span><div>Treasure</div><span>"+rTreasure.toLocaleString()+"</span></div><div class='totalRow'><div>TOTAL GEMS</div><span>"+total.toLocaleString()+"</span></div>");
}
