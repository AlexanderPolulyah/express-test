const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/testGet', (req, res) => {
    res.status(200).json('ответ на тест через GET!')
})
app.post('/testPost', (req, res) => {
    res.status(200).json('ответ на тест через POST!')
})

app.listen(3000, () => console.log('server started...'))