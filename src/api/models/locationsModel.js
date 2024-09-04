const mongoose = require('mongoose');

const locationsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    users: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
    cats: [{ type: mongoose.Types.ObjectId, ref: 'cats' }]
  },
  {
    timestamps: true,
    collection: 'Locations'
  }
);

const Location = mongoose.model('locations', locationsSchema, 'locations');

module.exports = Location;
