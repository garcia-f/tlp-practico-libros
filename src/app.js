import express from 'express';
import 'dotenv/config';
import { connectToMongo } from './config/database.js';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import path from 'node:path';


const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    fileUpload({
        createParentPath: true,
        limits: { fileSize: 20 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: "Archivo muy grande",
    })
);
app.use(morgan("tiny"));

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




// Servidor
app.listen(process.env.PORT, () => {
    connectToMongo()
    console.log(`Server run in port`, process.env.PORT);
})
