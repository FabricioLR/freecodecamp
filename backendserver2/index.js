const express = require('express');
const cors = require("cors")

const app = express();

app.use(cors())
app.set('trust proxy', true)

app.get("/api/whoami", (req, res) => {
    console.log(String(req.ip).slice(7))
    return res.send({ "ipaddress": String(req.ip).slice(7), "language": req.headers["accept-language"], "software": req.headers["user-agent"]})
})

app.listen(4000, console.log("server running"))