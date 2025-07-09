import express from 'express';
import pg from 'pg';
import env from 'dotenv';

const app = express();
const PORT = 3000;
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});
db.connect();

app.get('/all-products', async (req, res) => {
    try {
        const response = await db.query('SELECT * FROM products');
        res.send(response.rows);
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while fetching products'
        })
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});