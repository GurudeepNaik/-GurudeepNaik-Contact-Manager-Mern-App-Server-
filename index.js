const express = require("express");
const route = require("./routes/route.js");
const app = express();

const PORT = 8080;
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://contactmanager:contactmanager@cluster0.jvlvlig.mongodb.net/Contact-Manager?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
    else console.log("Database Connected");
  }
);

app.use(express.json());
app.use("/Contact", route);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: "Failed",
    message: "Invalid Path",
  });
});
app.listen(PORT, () => {
  console.log(`Server is up at http://localhost:${PORT}/`);
});
