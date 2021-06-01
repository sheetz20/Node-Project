const assert = require('assert')
const { totalCharges } = require('../src/utils/utils.js')

data = [{
        phoneNumber: 1234467889,
        company: "Airtel",
        internetUsed: "1020mb",
        callDuration: "1.4hr",
        billPaid: "2021-05-31"
    },
    {
        phoneNumber: 1234467889,
        company: "Airtel",
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