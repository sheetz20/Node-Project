require('dotenv').config()

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
    let totalCharge = 0
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
            totalCharge = billPerSim(totalInternetUsed, totalCallDuration, process.env.freeInternetAirtel, process.env.internetChargeAirtel, process.env.freeCallAirtel, process.env.callChargeAirtel);
        } else if (sim === "Vodafone") {
            totalCharge = billPerSim(totalInternetUsed, totalCallDuration, process.env.freeInternetVodafone, process.env.internetChargeVodafone, process.env.freeCallVodafone, process.env.callChargeVodafone);
        }
    });
    return totalCharge
}

module.exports.totalCharges = totalCharges