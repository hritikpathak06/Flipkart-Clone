const express = require('express');
require('./db/connection')
const DefaultData = require("./default")
const Router = require("./routes/route")
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();


port = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use("/", Router)


app.use('/', (req,res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Server started listening at the port:${port}`)
})

DefaultData()