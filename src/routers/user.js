const { response } = require('express')
const express = require('express')
const User = require('../models/user.js')
const router = new express.Router()
const { totalCharges } = require('../utils/utils.js')

router.post("/tele-bill/consumption", async(req, res) => {
    // console.log(req.body)
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/tele-bill/myBill', (req, res) => {
    const phone = req.body.phoneNumber
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const company = req.body.company
    User.find({ "phoneNumber": phone, "billPaid": { $gte: startDate, $lte: endDate }, "company": company }, (error, data) => {
        if (error) {
            res.status(500).send(error)
        } else {
            let myBill = totalCharges(data, company)
                // console.log(Math.round(myBill))
            res.send({
                "Phone Number": phone,
                "Company": company,
                "Total Bill": Math.round(myBill).toString()
            })
        }
    })
})

router.get('/tele-bill/reminder', (req, res) => {
    let todayDate = new Date()
    let beforeDate = new Date()
    let response = []
    let data1 = []
    let userData = 0
    beforeDate.setDate(beforeDate.getDate() - 90)
    User.find({ "billPaid": { $gte: beforeDate, $lte: todayDate } }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            let uniquePhoneNumbers = [...new Set((data.map((item) => {
                    return item.phoneNumber

                })))]
                // console.log("uniquePhoneNumbers", uniquePhoneNumbers)
            uniquePhoneNumbers.forEach((number, i) => {
                data1 = data.filter((item) => {
                        return item.phoneNumber == number
                    })
                    // console.log("data1", i, "------", data1)

                let airtelCharges = totalCharges(data1)
                let total = airtelCharges
                if (total > 600) {
                    userData = {
                        "Phone Number": number,
                        "TotalCharge": total
                    }
                }
                response.push(userData)

            })

            res.send(response)
        }
    })
})

module.exports = router