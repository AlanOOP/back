const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb+srv://root:root@cluster0.3biyd9v.mongodb.net/Ecommerce?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}

// mongodb://localhost:27017/Ecommerce