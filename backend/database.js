const mongoose = require('mongoose');

async function connectDB() {
  try {
    const conn = await mongoose.connect('mongodb+srv://<user>:<password>@cluster0.mongodb.net/<vitaSync>?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Encerra o processo em caso de erro
  }
}

module.exports = connectDB;
