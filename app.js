const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const mymiddleware = require("./middlewares");
const api = require("./router/api");
const app = express();
const router = express.Router();

const Todo = require("./model/todo");

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// get the list of todos
app.get("/", (req, res) => {
  Todo.find({}, (err, docs) => {
    if (err) next(err);
    res.json(docs);
  });
});

// find the todo based on specific id
app.get("/:todoId", async (req, res) => {
  const instance = await Todo.findById(req.params.todoId).exec();
  res.json(instance);
});

//create a new post
router.post("/", async (req, res, next) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    next(err);
  }
});

// remove one from the list
app.delete("/:todoId", async (req, res, next) => {
  try {
    const deletedTodo = await Todo.deleteOne({ _id: req.params.todoId });
    res.json(deletedTodo);
  } catch (err) {
    next(err);
  }
});

// update the one from the list
app.put("/:todoId", async (req, res, next) => {
  try {
    const updatedTodo = await Todo.updateOne({ _id: req.params.todoId }, { title: req.body.title });
    res.json(updatedTodo);
  } catch (err) {
    next(err);
  }
});

app.use("/feed/", router);
app.use("/api/", api);

app.use(mymiddleware.notFound);
app.use(mymiddleware.errorHanlder);

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to DB");
  }
);

module.exports = app;
