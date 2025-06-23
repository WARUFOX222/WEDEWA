const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 10000;

app.use('/streams', express.static(path.join(__dirname, 'streams')));
app.use('/overlays', express.static(path.join(__dirname, 'overlays')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/rooms.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/rooms.json'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
