const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");
const app = express();

app.use(
  cors({
    origin: "http://localhost:1234"
  })
);

app.use(routes.contactsRouters);
app.get("/", (req, res) => {
  res.json({ hi: "lol" });
});

const { username, password, server, dbname } = config.database;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const mongoServerURL = `mongodb+srv://${username}:${encodeURI(
  password
)}@${server}/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(mongoServerURL, options).then(
  () => {
    console.log("application commences");
    app.listen(3000, () =>
      console.log(`application is listening at http://localhost:3000`)
    );
  },
  err => {
    console.error(err);
  }
);
