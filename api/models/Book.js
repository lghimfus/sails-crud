/**
 * Book.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "book",

  attributes: {
    title: {
      type: "string",
      required: true,
      maxLength: 30,
    },
    author: { type: "string", required: true, minLength: 5, maxLength: 30 },
    description: {
      type: "string",
      required: true,
      minLength: 20,
      maxLength: 100,
    },
    year: {
      type: "number",
      required: true,
      isInteger: true,
      min: 999,
      custom: function (value) {
        return (
          value <= new Date().getFullYear() && value.toString().length === 4
        );
      },
    },
  },
};
