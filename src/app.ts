import express = require('express');
import dotenv from 'dotenv'
import Doorbell from "./components/doorbell/doorbell";

dotenv.config();

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    new Doorbell();
});