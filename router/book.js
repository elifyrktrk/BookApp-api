const express = require("express");
const router = express.Router();
const Book = require("../model/Book");

router.get("/", (req,res) => {
    Book.find({}, (err,data) => {
        if(!err){
            res.json(data);
        }
    });
});

router.get("/detail/:id", (req,res) => {
    Book.aggregate([
        {   
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'category'
            }   
        }
    ], (err, data) => {
        if(!err){
            res.json(data);
        }
    })
});

router.post("/add", (req,res) => {
   let new_book = new Book(req.body);
   new_book.save();
   res.json({
       success: true,
       message: "İşlem başarılı",
   });
});

module.exports = router;    