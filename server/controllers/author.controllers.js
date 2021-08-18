const Author = require("../models/author.models");

const getAllAuthor = (req, res) => {
  Author.find({})
    .then((authors) => {
      res.json(authors);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const createAuthor = (req, res) => {
  Author.create({
    name: req.body.name,
  })
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((author) => {
      res.json(author);
    })
    .catch((err) => {
      res.status.status(400).json(err);
    });
};

const updateAuthor = (req, res) => {
  Author.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.name,
    },
    {
      new: true,
      useFindAndModify: true,
    }
  )
    .then((author) => {
      res.json(author);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(deleteconfirm => {
      res.json(deleteconfirm);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllAuthor,
  createAuthor,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
};
