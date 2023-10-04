import express from 'express';
import 'dotenv/config';
import { connectToMongo } from './config/database.js';

const app = express();


app.use(express.json());


app.listen(process.env.PORT, () => {
    connectToMongo()
    console.log(`Server run in port`, process.env.PORT);
})
