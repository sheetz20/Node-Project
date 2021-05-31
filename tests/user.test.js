const { TestWatcher } = require('@jest/core')
const request = require('supertest')
const app = require('../src/index.js')


test("User Data insertion", async() => {
    await request.app.post('/tele-bill/consumption').send({
        name: "demo",
        phoneNumber: 1236547896,
        company: "Airtel",
        internetUsed: "500mb",
        callDuration: "1hr"
    }).expect(201)
})