const express = require("express");
const { connection } = require("./db/db");
const { tokenValidator } = require("./midlleware/validator");
const { loginRoute } = require("./routers/loginRouter");
const { registerRouter } = require("./routers/registerRouter");
const { testRoute } = require("./routers/testRoute");
const app = express();
app.use(express.json());
require("dotenv").config();

app.use('/',testRoute)
app.use("/", registerRouter);
app.use("/", loginRoute);

app.listen(process.env.port, () => {
  connection();
});
