require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');

const app = express();

connectDB();

app.use(express.json());

app.use('api/v1/users', usersRouter);
api.use('api/v1/cats', catsRouter);
api.use('api/v1/locations', locationsRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json({ message: 'Not found' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
