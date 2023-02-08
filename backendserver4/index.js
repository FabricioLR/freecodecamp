const express = require('express');
const cors = require("cors")
const multer = require("multer")

const app = express();
const Multer = multer({
    dest: "/uploads"
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/filemetadata", (req, res) => {
    res.sendFile(__dirname + '/views/fileMetadata.html')
})

app.post("/filemetadata/api/fileanalyse", Multer.single("upfile"), (req, res) => {
    try {
        return res.json({
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size
        })

    } catch (error) {
        return res.send({ error: "internal error"})
    }
})

app.listen(4000, console.log("server running"))