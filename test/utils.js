const expect = require("chai").expect
const { totalCharges } = require('../src/utils/utils.js')
const request = require('supertest')
const express = require('express')
const sinon = require('sinon')
require('sinon-mongo')

const app = express()

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
        expect(totalCharges(data)).to.equal(648)
    })
    it("User Data", () => {
        const users = sinon.mongo.collection();
        const mockCollections = { users }
            // sinon.stub(db, 'getCollection').returns(mockCollection);
        mockCollections.users.save()
        request(app)
            .post('/tele-bill/consumption')
            .send({
                "name": "Ross",
                "phoneNumber": 8888888888,
                "company": "Vodafone",
                "internetUsed": "1100mb",
                "callDuration": "1h"
            })
            .expect(200)
    })
    it("User Data", () => {
        request(app)
            .post('/tele-bill/myBill')
            .send({
                "name": "Ross",
                "phoneNumber": 8888888888,
                "company": "Vodafone",
                "internetUsed": "1100mb",
                "callDuration": "1h"
            })
            .expect(200)
    })
})