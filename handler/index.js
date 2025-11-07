import dotenv from 'dotenv'
import connectDB from './db/mongodb.js';
import express from 'express';

import { handleGet, handlePost } from './controllers/controllers.js';
import cors from 'cors'

dotenv.config();
export const app = express();
app.use(express.json())
app.use(cors());

await connectDB();


app.post('/sendFullUrl', handlePost)
app.get('/:shortUrl', handleGet) 