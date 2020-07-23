/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  addOne: function (req, res) {
    Book.create(req.body).exec(function (err) {
      if (err) {
        return res.status(400).json({ success: false, message: err.details });
      }

      return res.status(201).json({ success: true });
    });
  },

  getAll: function (req, res) {
    Book.find().exec(function (err, books) {
      if (err) {
        return res.status(400).json({ success: false, message: err.details });
      }

      return res.status(200).json(books);
    });
  },

  getById: function (req, res) {
    Book.findOne({ id: req.param("id") }).exec(function (err, book) {
      if (err) {
        return res.status(400).json({ success: false, message: err.details });
      }

      return res.status(200).json(book);
    });
  },

  updateOne: async function (req, res) {
    var updatedBook;

    try {
      updatedBook = await Book.updateOne({ id: req.param("id") }).set(req.body);
    } catch (err) {
      return res.status(400).json({ success: false, message: err.details });
    }

    if (updatedBook) {
      return res.status(200).json(updatedBook);
    } else {
      return res.status(404).json({
        success: false,
        message: "Could not find a book for the specified id.",
      });
    }
  },

  deleteOne: async function (req, res) {
    var deletedBook;

    try {
      deletedBook = await Book.destroyOne({ id: req.param("id") });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.details });
    }

    if (deletedBook) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(404).json({
        success: false,
        message: "Could not find a book for the specified id.",
      });
    }
  },
};
