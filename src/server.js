const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Configure your MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'event_management'
});

// Example endpoint: Get all events
app.get('/api/events/upcoming', (req, res) => {
  db.query('SELECT * FROM events ORDER BY start_date ASC LIMIT 20', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ events: results });
  });
});

// Example endpoint: Get event by ID
app.get('/api/events/:id', (req, res) => {
  db.query('SELECT * FROM events WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Event not found' });
    res.json(results[0]);
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));