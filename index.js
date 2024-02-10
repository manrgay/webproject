const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();
const port = 3001;

app.set('views', path.join(__dirname, 'static'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let root_path = path.resolve(__dirname, 'static');
app.use(express.static(root_path));

const memberRoutes = require('./router/member');
app.use('/', memberRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});