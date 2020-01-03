require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const con = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
   app.set('db', db);
   console.log('DB connected');
})

app.post('/api/houses', con.addHouse);
app.get('/api/houses/all', con.getAll);
app.delete('/api/houses/:id', con.deleteHouse);
app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));