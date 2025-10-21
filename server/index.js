const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const DB_FILE = path.join(__dirname, 'bookings.json');

function readDB() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { bookings: [] };
  }
}

function writeDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/bookings', (req, res) => {
  const db = readDB();
  res.json(db.bookings);
});

app.post('/bookings', (req, res) => {
  const { name, email, date, time, notes } = req.body || {};
  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'Campi mancanti' });
  }

  const db = readDB();
  const newBooking = {
    id: Date.now(),
    name,
    email,
    date,
    time,
    notes: notes || '',
    createdAt: new Date().toISOString(),
  };
  db.bookings.push(newBooking);
  writeDB(db);
  res.status(201).json(newBooking);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server bookings avviato su http://localhost:${port}`);
});