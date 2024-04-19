const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const UserRouter = require("./routes/route.user");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", UserRouter);

app.listen(port, () => {
  console.log("Server aktif");
  console.log(`http://localhost:${port}`);
});
