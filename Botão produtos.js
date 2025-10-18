// Backend: server.js (Node.js)
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/share', (req, res) => {
  const message = 'Hello World!';
  const url = `https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  res.redirect(url);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});