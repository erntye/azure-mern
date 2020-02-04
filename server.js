require('dotenv').config()
require('./server/db-conn')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static('./client/cwpportal/build/'))

app.use('/api/thoughts', require('./server/routes/thoughts-route'));

app.get('/', (req, res) => {
    res.sendFile('client/cwpportal/build/index.html', { root: __dirname })
})


const { PORT } = process.env
app.listen( PORT, () => console.log(`port ${PORT}`))