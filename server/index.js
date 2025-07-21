const express = require('express');
const authRoutes = require('./routes/auth');
const verifyToken = require('./middleware/authMiddleware');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'localskillhub',
  password: '******',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/listings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM listings');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post('/api/listings', verifyToken, async (req, res) => {
  const { title, description, location, price, category } = req.body;

  if (!title || !description || !location || !price || !category) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO listings (title, description, location, price, category) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, location, price, category]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.use('/api/auth', authRoutes);
