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
      const books = await Book.find();

      res.json(books);
      
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
    
    .delete(function(req, res){
      //if successful response will be 'complete delete successful'
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      let bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
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
