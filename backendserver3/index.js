const express = require('express');
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const urls = {}
var index = 0

app.post("/api/shorturl", (req, res) => {
    var url = ""
    try {
        url = new URL(req.body.url)
        if (!String(url).includes("https") || !String(url).includes("http")){
            res.json({ error: "invalid url" })
        }
    } catch (error) {
        res.json({ error: "invalid url" })
    }
    index += 1
    urls[index] = url
    return res.send({ original_url: url, short_url : index })
})

app.get("/api/shorturl/:url", (req, res) => {
    const { url } = req.params
    
    try {
        if (!urls[url]) throw "url not found"

        res.redirect(urls[url])
    } catch (error) {
        return res.json({ error })
    }
})
app.listen(4000, console.log("server running"))