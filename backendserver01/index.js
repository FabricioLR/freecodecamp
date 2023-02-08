const express = require('express');
const PORT = process.env.PORT || 4000
const cors = require("cors")

const app = express();

app.use(cors())
app.get("/api/:date", (req, res) => {
    const date = req.params.date;
    let finaldate;

    if (!date) {
        finaldate = new Date();
    } else {
        const checkUnix = date * 1;
        finaldate = isNaN(checkUnix) ? new Date(date) : new Date(checkUnix);
    }

    if (finaldate == "Invalid Date") {
        res.json({ error: "Invalid Date" })
    } else {
        res.json({ unix: finaldate.getTime(), utc: date.toUTCString() })
    }
})

app.get("/api", (req, res) => {
    return res.status(200).send({ unix: Number(new Date().getTime()), utc: new Date().toUTCString() })
})

app.listen(PORT, () => console.log("server running on port " + PORT))