import express, { Response } from "express";
import { mongoConnection } from "./config/db.connection";
import router from "./routes/app.route";
import path from "path";
// import dotenv from "dotenv";
// dotenv.config();
const app = express();

const port = 4000;

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use(router);
// app.use(handleCustomError);

//database call

mongoConnection();
app.listen(port, () => {
  console.log(`the server is running on port 2:   ${port}`);
});

// http://localhost:4000/home
