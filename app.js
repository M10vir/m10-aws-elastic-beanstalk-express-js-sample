const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hallo, Welcome to M10 xWorld! This is 2nd Update with Manual_Review'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
