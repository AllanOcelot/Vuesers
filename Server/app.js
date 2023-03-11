// To use local ENV
require('dotenv').config();


// Pocketbase will be our server, because I think it's absolutely amazing and I want to dive into it.
const PocketBase = require('pocketbase/cjs')
const pb = new PocketBase(process.env.POCKETBASE_URL);

// Setup Express
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('User landed on /')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})