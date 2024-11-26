// backend/config/db.js
const mongoose = require('mongoose');
require('dotenv').config();


const bd = 'mongodb+srv://digo010133:03041985@cluster0.ufn2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(db, {
useNewUrlPaser: true,
useUnifiedTopoLogy: true,
});

module.exports = connection;