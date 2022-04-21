import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './config/connectDB';
import cors from 'cors';
require("dotenv").config();
let app = express();
app.use(cors({ origin: true }));

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT;

app.listen(port, () => {
    console.log("Dinh THi Ly da thanh cong " + port)
})