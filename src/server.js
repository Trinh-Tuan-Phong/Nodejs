import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import conntectDB from './config/connectDB';

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

conntectDB();

let port = process.env.PORT || 6699;

app.listen(port, () => {
    console.log("Backend Nodejs đã chạy ở cổng: " +port)
})
