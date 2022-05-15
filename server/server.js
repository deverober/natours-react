const path = require('path')
const express = require('express')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '..', 'public')

app.use(helmet())
app.use(express.static(publicDirectoryPath))

app.get('*', (req, res) => {
    res.sendFile(publicDirectoryPath)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
