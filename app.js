const express = require('express')
const app = express()
const port = 3000

require('./config/mongoose')

app.get('/', (req, res) => {
  console.log('Express is listening!')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
