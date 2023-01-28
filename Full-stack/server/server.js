const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const foodSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  icon: { type: String, required: true },
});
const Foods = mongoose.model("foods", foodSchema);
app.use(cors());
app.use(bodyParser.json());

app.get("/foods", (req, res) =>
  Foods.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
  })
);
app.get("/foods/:id", (req, res) => {
  const { id } = req.params;
  Foods.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      }
    }
  });
});

app.delete("/foods/:id", function (req, res) {
  const { id } = req.params;
  Foods.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send({ message: "Succesfully deleted" });
      }
    }
  });
});
app.post("/foods", (req, res) => {
  let Food = new Foods({
    imgUrl: req.body.imgUrl,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    icon:req.body.icon
  });
  Food.save();
});
mongoose.connect(
  "mongodb+srv://AliyevParvin:pervin2003@cluster0.msopybu.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      );
    }
  }
);
