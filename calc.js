// Example: 2d6 would be (2,6)
function calcAvgDamage(numDice, numSides) {
    // n(n+1)/2
    sum = numSides*(numSides + 1)/2;
    avgSingleDiceDamage = sum/numSides;
    totalAvgDamage = numDice * avgSingleDiceDamage;
    return totalAvgDamage;
}

function calcAvgDamageWithRerolls(numSides, numDice=1, rerolls=[]) {
    avgDamage = calcAvgDamage(1,numSides);
    sides = [];
    for (i = 1; i <= numSides; ++i) {
        // if i in rerolls
        if (rerolls.indexOf(i) != -1) {
            sides.push(avgDamage);
        }
        else {
            sides.push(i);
        }
    }
    sum = sides.reduce((a,b) => a+b,0);
    return numDice*sum/numSides;   
}

function updateDamage() {
    numDice = document.getElementById("numDice").valueAsNumber;
    numSides = document.getElementById("numSides").valueAsNumber;
    reroll = document.getElementById("reroll").value;
    reroll_list = [];
    if (reroll != "") {
        reroll_list = reroll.split(",").map(Number);
    }
    dmg = calcAvgDamageWithRerolls(numSides, numDice, reroll_list);
    document.getElementById("avgDamage").innerHTML = dmg;
}

