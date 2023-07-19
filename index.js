const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/test', (req, res) => {
    res.status(200).json('ответ на тест!')
})

app.listen(3000, () => console.log('server started...'))