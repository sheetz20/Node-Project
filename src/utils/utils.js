const totalCharges = function(data, company) {
    let totalCallDuration = 0
    let totalInternetUsed = 0
    let totalCharge = 0
    for (var i = 0; i < data.length; i++) {
        totalInternetUsed += parseFloat(data[i].internetUsed)
        totalCallDuration += parseFloat(data[i].callDuration)
    }
    totalCallDuration = totalCallDuration * 60
    if (company === "Airtel") {
        if (totalInternetUsed < 500) {
            totalCharge = 0
        } else {
            totalCharge += (totalInternetUsed - 500) * 0.5
        }
        if (totalCallDuration < 30) {
            totalCharge = 0
        } else {
            totalCharge += (totalCallDuration - 30) * 1
        }
    } else {
        if (totalInternetUsed < 300) {
            totalCharge = 0
        } else {
            totalCharge += (totalInternetUsed - 300) * 0.8
        }
        if (totalCallDuration < 60) {
            totalCharge = 0
        } else {
            totalCharge += (totalCallDuration - 60) * 2
        }
    }
    return totalCharge
}

module.exports.totalCharges = totalCharges