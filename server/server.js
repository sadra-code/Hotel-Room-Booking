const express = require('express')

const Port = 8000
express()

.get('/', (req, res) => {
  res.send('Hello World!')
})

.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})