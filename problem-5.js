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

//const res = resultReport(100);
//console.log(res);

