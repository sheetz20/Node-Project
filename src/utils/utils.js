function billPerSim(totalInternetUsed, totalCallDuration, freeInternet, internetCharge, freeCall, CallCharge) {
    let totalCharge = 0;
    if (totalInternetUsed < freeInternet) {
        totalCharge = 0
    } else {
        totalCharge += (totalInternetUsed - freeInternet) * internetCharge
        console.log("Total charge internet :", totalCharge);
    }
    if (totalCallDuration < freeCall) {
        totalCharge = 0
    } else {
        totalCharge += (totalCallDuration - freeCall) * CallCharge
        console.log("Total charge call :", totalCharge);
    }
    return totalCharge
}
const totalCharges = function(data) {
    let companyList = [...new Set((data.map((item) => {
        return item.company

    })))]
    companyList.forEach(sim => {
        let totalCallDuration = 0
        let totalInternetUsed = 0

        data.forEach(element => {
            if (element.company === sim) {
                totalInternetUsed += parseFloat(element.internetUsed)
                totalCallDuration += parseFloat(element.callDuration)
            }
        });
        totalCallDuration = totalCallDuration * 60
        if (sim === "Airtel") {
            totalCharge = billPerSim(totalInternetUsed, totalCallDuration, 500, 0.5, 30, 1);
        } else if (sim === "Vodafone") {
            totalCharge = billPerSim(totalInternetUsed, totalCallDuration, 300, 1.5, 40, 0.5);
        }
    });
    return totalCharge
}

module.exports.totalCharges = totalCharges