const express = require('express')

const app = express()
app.use(express.json())

app.post('/test', (req, res) => {
    res.status(200).json('ответ на тест!')
})

app.listen(3000, () => console.log('server started...'))