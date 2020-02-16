// Example: 2d6 would be (2,6)
function calcAvgDamage(numDice, typeDice) {
    numDice = parseInt(numDice);
    typeDice = parseInt(typeDice);
    // n(n+1)/2
    sum = typeDice*(typeDice + 1)/2;
    avgSingleDiceDamage = sum/typeDice;
    totalAvgDamage = numDice * avgSingleDiceDamage;
    return totalAvgDamage;
}

function updateDamage() {
    numDice = document.getElementById("numDice").value;
    typeDice = document.getElementById("typeDice").value;
    dmg = calcAvgDamage(numDice, typeDice);
    document.getElementById("avgDamage").innerHTML = dmg;
}

