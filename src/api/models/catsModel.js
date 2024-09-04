const mongoose = require('mongoose');

const catsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: [
        'Común europeo',
        'Pelo corto',
        'Pelo largo',
        'Atigrado',
        'Bicolor',
        'Tricolor',
        'Negro',
        'Carey',
        'Romano',
        'Raza'
      ]
    },
    temperament: {
      type: String,
      required: true,
      enum: ['Sociable', 'Desconfiado', 'Agresivo']
    },
    year: { type: Number, required: true },
    locations: [{ type: mongoose.Types.ObjectId, ref: 'locations' }],
    users: [{ type: mongoose.Types.ObjectId, ref: 'users' }]
  },
  {
    timestamps: true,
    collection: 'cats'
  }
);

const Cat = mongoose.model('cats', catsSchema, 'cats');

module.exports = Cat;
