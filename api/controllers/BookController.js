/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createBook: function (req, res) {
    Book.create(req.body).exec(function (err) {
      if (err) {
        return res.status(400).json({ success: false, message: err.details });
      }

      return res.status(200).json({ success: true });
    });
  },

  getBooks: function (req, res) {
    Book.find().exec(function (err, books) {
      if (err) {
        return res.status(400).json({ success: false, message: err.details });
      }

      return res.status(200).json(books);
    });
  },
};
