import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// middleWares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
readdirSync("./routes").map(r => app.use("/api", require(`./routes/${r}`))); // applied as middleware

// port
const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`listening to backend at port http://localhost:${port}`)
);
