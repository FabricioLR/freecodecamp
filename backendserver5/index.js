const express = require('express');
const cors = require("cors")
const database = require("./database")
const User = require("./User")
const Exercise = require("./Exercise")
const Sequelize = require("sequelize")
const moment = require("moment")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

database.sync({ force: true })

require("./association")

app.post("/api/users", async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username
        })

        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error })
    }
})

app.get("/api/users", async (req, res) => {
    try {
        const response = []
        const users = await User.findAll()
        users.map(user => {
            response.push({ username: user.username, _id: String(user._id) })
        })

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error })
    }
})

app.post("/api/users/:_id/exercises", async (req, res) => {
    let {description, duration, date } = req.body;
    let id = req.params._id;

    if (date) {
        //date = new Date(date.replaceAll("-", "/")).toDateString()
        date = new Date(String(date) + 'T00:00:00').toDateString()
    } else {
        const parts = String(new Date().toLocaleDateString()).split("/")
        date = new Date(String(parts[2]+"/"+parts[1]+"/"+parts[0])).toDateString()
    }

    try{
        const user = await User.findOne({
            where: {
                _id: id
            }
        })

        if (!user) throw "user not found"

        const exercise = await Exercise.create({
            description, duration, date, _id: id, username: user.username
        })

        res.json({
            username: user.username,
            description: description,
            duration: parseInt(duration),
            _id: String(id),
            date: String(date)
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error })
    }
})
app.get("/api/users/:_id/logs", async (req, res) => {
    const { _id } = req.params
    const { limit, from, to } = req.query

    try {
        const user = await User.findOne({
            where: {
                _id,
            },
            include: [
                {
                    model: Exercise,
                    as: "log",
                    attributes: ["date", "description", "duration"],
                    limit: limit != 0 ? limit : 100
                }
            ]
        })

        if (from && to){
            const fromDate = new Date(from);
            const toDate = new Date(to);
            const log = user.log.filter(exe => Date.parse(exe.date) > fromDate) && user.log.filter(exe => Date.parse(exe.date) < toDate)
            return res.status(200).json({ username: user.username, _id: user._id, count: log.length, log })
        }

        return res.status(200).json({ username: user.username, _id: user._id, count: user.log.length, log: user.log })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error })
    }
})
app.listen(4000, console.log("server running"))