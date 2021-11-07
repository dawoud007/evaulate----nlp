const port=8081
let inputLink = [] 
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const app = express()
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))
app.listen(port, function () {
   console.log("server running")
})



const base = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY





app.post('/api', async function(req, res) {
    inputLink = req.body.url;
   
    const linkapi = `${base}key=${apiKey}&url=${inputLink}&lang=en`
  console.log(linkapi)
    const resp = await fetch(linkapi)
    const backData = await resp.json()

    res.send(backData)
 
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    
})



