const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
  {
    usuario: { type: String, required: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    locations: [{ type: mongooseTypes.ObjectId, ref: 'locations' }],
    cats: [{ type: mongooseTypes.ObjectId, ref: 'cats' }]
  },
  {
    timestamps: true,
    collection: 'autores'
  }
);

const Users = mongoose.model('users', usersSchema, 'autores');

module.exports = Users;
