function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    const serviceCharge = fare * (20 / 100);
    let extraServiceCharge = 30;
    const totalFine = fare + serviceCharge + extraServiceCharge;
    return totalFine;
}

//const res = totalFine(552);
//console.log(res);
