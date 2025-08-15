//problem-1
function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    const serviceCharge = fare * (20 / 100);
    let extraServiceCharge = 30;
    const totalFine = fare + serviceCharge + extraServiceCharge;
    return totalFine;
}


//problem-2
function  onlyCharacter( str ) {
    if(typeof str !== 'string') {
        return 'Invalid';
    }
    str = str.trim();
    str = str.replaceAll(" ","");
    str = str.toUpperCase();
    return str;
}


//problem-3
function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }

    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;

    if (team1 < team2) {
        return player1.name;
    }
    else if (team2 < team1) {
        return player2.name;
    }
    else if (team1 === team2) {
        return "Tie";
    }
}


//problem-4
function isSame(arr1, arr2) {
    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false){
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}


//problem-5
function resultReport(marks) {
    if (Array.isArray(marks) === false) {
        return "Invalid";
    }

    let sum = 0;
    for (mark of marks) {
        sum += mark;
    }
    let avg = sum / marks.length;
    let finalScore = Math.round(avg);
    if (marks.length === 0){
        finalScore = 0;
    }
        

    let pass = 0;
    let fail = 0;
    for (mark of marks) {
        if (mark >= 40) {
            pass++;
        }
        else {
            fail++;
        }
    }
    return {finalScore, pass, fail};
}