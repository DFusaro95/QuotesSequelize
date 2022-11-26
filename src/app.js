const express = require('express');
const app = express();
const port = 8600;
const db = require('./utils/database')
const quoteRouter = require('./quotes/quotes.router')

db.authenticate()
  .then(() => {
    console.log('Database Authenticated')
  })
  .catch((err) => {
    console.log(err)
  })

db.sync()
  .then(() => {
    console.log('Database Synced')
  })
  .catch((err) => {
    console.log(err)
  })

app.use(express.json());
app.use('/api/v1', quoteRouter)

app.get('/', (req, res) => {
  res.status(200).json({message: 'Ok'})
});

app.listen(port, () =>{
  console.log(`Server started at port: ${port}`);
});