/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';

const { default: mongoose } = require("mongoose");
const BookSchema = require("../db_schema");

module.exports = function (app) {

  const Book = mongoose.model('Book', BookSchema);

  app.route('/api/books')
    .get(async function (req, res){
      //response will be array of book objects
      //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
      try {
        const books = await Book.find();
        res.json(books);
      } catch (err) {
        res.json({ error: err });
      }
    })
    
    .post(async function (req, res){
      let title = req.body.title;

      if (!title) {
        return res.json( "missing required field title" );
      };

      try {
        const newBook = new Book({
          title
        });
        const savedBook = await newBook.save();
        res.json(savedBook);
      } catch (err) {
        res.json({ error: err });
      }
    })
    
    .delete(async function(req, res){
      try {
        const deleted = await Book.deleteMany({});
        res.json("complete delete successful");
      } catch (err) {
        res.json({ error: err });
      }
    });


  app.route('/api/books/:id')
    .get(async function (req, res){
      let bookid = req.params.id;

      try {
        const book = await Book.findById(bookid);
        if (!book) {
          return res.json("no book exists")
        }
        res.json(book);
      } catch (err) {
        res.json({error: err})
      }
    })
    
    .post(function(req, res){
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get
    })
    
    .delete(function(req, res){
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
    });
  
};
