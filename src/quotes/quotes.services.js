const Quotes = require('../models/quotes.models')
const quoteControllers = require('./quotes.controllers')

const getAllQuotes = async (req, res) => {
//? TRY Y CATCH 
  try {
    const data = await quoteControllers.findAllQuotes
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
//? THEN Y CATCH
  // quoteControllers.findAllQuotes()
  //   .then((data) => {
  //     res.status(200).json(data)
  //   })
  //   .catch((err) => {
  //     res.status(400).json({message: err.message})
  //   })
}

const getQuoteByID = (req, res) => {
  const id = req.params.id
  quoteControllers.findQuoteByID(id)
    .then((data) => {
      if(data){
        res.status(200).json(data)
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}


const postQuote = (req, res) => {
  const { quote, author, year } = req.body
  quoteControllers.createQuote({ quote, author, year })
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

const patchQuote = (req, res) => {
  const id = req.params.id
  const { quote, author, year } = req.body
  quoteControllers.updateQuote(id, { quote, author, year })
    .then((data) => {
      if(data){
        res.status(200).json({message: 'Quote updated successfully with id: ' + id})
      } else {
        res.status(404).json({message: 'ID Not Found'})
      }
    })
    .catch(() => {
      res.status(400).json({message: err.message})
    })
}

const deleteQuote = (req, res) => {
  const id =  req.params.id
  quoteControllers.destroyQuote(id)
    .then((data) => {
      if(data){
        res.status(204).json({message: 'Quote deleted successfully'})
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllQuotes,
  getQuoteByID,
  postQuote,
  patchQuote,
  deleteQuote
}