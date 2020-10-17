const express = require('express')
var cors = require('cors')

const app = express();
console.log('Servidor activo');

// Parse JSON bodies (as sent by API clients)
app.use(express.json({ extended: true }));

// API PORT
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors())

app.get('/api/ping', (req, res) => {
  res.send('Pong');
});

app.use('/api/auth', require("./routes/auth"));
app.listen(PORT);