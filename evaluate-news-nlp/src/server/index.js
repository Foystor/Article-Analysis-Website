var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

// middle-ware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    const formdata = new FormData()
    formdata.append('key', process.env.API_KEY)
    formdata.append('url', req.query.url)
    formdata.append('lang', 'auto')

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }

    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => response.json())
    .then(data => {
        res.send(data)
    })
    .catch(error => console.log('error', error))
})
