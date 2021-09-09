const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const accountsRoute = require("./routes/AccDetails")
const path = require("path");
dotenv.config();

app.use(express.json());


mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:true
     });

app.use("/api/", accountsRoute);

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });

     app.listen(process.env.PORT || 5000, function(){
        console.log("Server started on port 5000.");
      });
