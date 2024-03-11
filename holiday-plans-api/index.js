const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5000;
const db = new sqlite3.Database(':memory:');

app.use(cors());
app.use(bodyParser.json());

db.serialize(() => {
  db.run('CREATE TABLE holiday_plans (id INTEGER PRIMARY KEY, title TEXT, description TEXT, date TEXT, location TEXT, participants TEXT)');
});

app.get('/api/plans', (req, res) => {
  db.all('SELECT * FROM holiday_plans', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/plans', (req, res) => {
  const { title, description, date, location, participants } = req.body;
  db.run('INSERT INTO holiday_plans (title, description, date, location, participants) VALUES (?, ?, ?, ?, ?)', [title, description, date, location, participants], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.put('/api/plans/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, date, location, participants } = req.body;
  db.run('UPDATE holiday_plans SET title = ?, description = ?, date = ?, location = ?, participants = ? WHERE id = ?', [title, description, date, location, participants, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Plan updated successfully.' });
  });
});

app.delete('/api/plans/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM holiday_plans WHERE id = ?', id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Plan deleted successfully.' });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
