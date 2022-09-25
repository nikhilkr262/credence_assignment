const BookModel = require("../models/book-model");

uploadBookDetails = async (req, res) => {
  console.log(req.body);
  const book = new BookModel(req.body);
  const result = await book.save();
  return res.status(201).send({
    success: true,
    message: "Book Added Successfully",
  });
};

getAllBooks = async (req, res) => {
  const books = await BookModel.find();
  return res.status(200).send({
    success: true,
    data: books,
  });
};

updateBookDetails = async (req, res) => {
  let result = await BookModel.findOneAndUpdate(
    { id: req.params.id },
    req.body
  );
  if (result) {
    return res.status(201).send({
      success: true,
      message: "Book Updated Successfully",
    });
  }
};

deleteBookDetails = async (req, res) => {
  const book = await BookModel.findByIdAndRemove(req.params.id);
  return res.status(200).send({
    success: true,
    message: "Book Deleted Successfully",
    data: book,
  });
};

module.exports = {
  uploadBookDetails,
  getAllBooks,
  updateBookDetails,
  deleteBookDetails,
};
