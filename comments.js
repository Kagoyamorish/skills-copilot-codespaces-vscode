// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for comments
const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
});

// Create a model for comments
const Comment = mongoose.model('Comment', commentSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});