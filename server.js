require("dotenv").config();
const express = require("express");
const cors = require("cors");

const db = require("./db");
const app = express();
const PORT = process.env.PORT;

const bookRouter = require("./routes/book-router");

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

db.on("error", console.error.bind(console, "MongoDB Connection Error : "));

app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.log(`Server Started On http://localhost:${PORT}`);
});
