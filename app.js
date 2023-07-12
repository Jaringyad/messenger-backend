import express from 'express';
import cors from 'cors';
import Settings from './src/routes/settings';
import mongoose from "mongoose";

require('dotenv').config({ path: './.env' });

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Ошибка подключения к базе данных:'));
db.once('open', () => {
    console.log('Успешное подключение к базе данных!');
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api', Settings)

app.listen(process.env.PORT || 3000, () => {
    console.log(
        `Server is running on port: ${process.env.PORT || 3000}`
    )
})
