const express = require('express');
const bodyParser = require('body-parser');
const wc = require('./controllers/places_controllers.js')

const app = express();

app.use( bodyParser.json());

app.get('/api/places, wc.read');
app.post('/api/places, wc.create');

const port  =3000;
app.listen( port, () => {console.log(`Server listening on port ${port}`); } );