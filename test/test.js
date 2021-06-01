const assert = require('assert')
const { totalCharges } = require('../src/utils/utils.js')
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math.js')


describe("fahrenheitToCelsius", () => {
    it("fahrenheitToCelsius", () => {
        assert.equal(fahrenheitToCelsius(32), 0)
    })
})

describe("celsiusToFahrenheit", () => {
    it("celsiusToFahrenheit", () => {
        assert.equal(celsiusToFahrenheit(32), 89.6)
    })
})

data = [{
        phoneNumber: 1234467889,
        comapny: "Airtel",
        internetUsed: "1020mb",
        callDuration: "1.4hr",
        billPaid: "2021-05-31"
    },
    {
        phoneNumber: 1234467889,
        comapny: "Airtel",
        internetUsed: "500mb",
        callDuration: "1.4hr",
        billPaid: "2021-05-31"
    }
]

describe("totalCharges", () => {
    it("totalCharges", () => {
        assert.equal(totalCharges(data), 648)
    })
})