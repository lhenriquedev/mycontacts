const express = require('express');
const routes = require('./routes');
require('express-async-error');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server running on port 3000'));
