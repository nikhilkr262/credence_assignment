const express = require("express");
const router = express.Router();

const {
  uploadBookDetails,
  getAllBooks,
  updateBookDetails,
  deleteBookDetails,
} = require("../controllers/book-ctrl");

router.post("/uploadbook", uploadBookDetails);
router.get("/getbooks", getAllBooks);
router.delete("/deletebook/:id", deleteBookDetails);
router.put("/updatebook/:id", updateBookDetails);

module.exports = router;