const express = require('express')
const dotenv = require("dotenv");
const app = express()

dotenv.config();

const PORT=process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('bookStore App')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})