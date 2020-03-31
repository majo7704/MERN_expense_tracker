const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(
      ` **** MongoDB CONNECTED ****: `.brightBlue.underline.bold +
        `${conn.connection.host}`.brightBlue
    );
  } catch (err) {
    console.log(`Error: ${err.message}.`.brightRed);
    process.exit(1); //app shouts down
  }
};

module.exports = connectDB;
