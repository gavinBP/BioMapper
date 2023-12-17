const express = require('express');
const path = require('path');

const app = express();
// const sql = require('msql');//necessary? probably not

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/*', (req, res) => {
    res.redirect('/');
});




//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  app.listen(3000, () => console.log('Express Server is listening to 3000.....NOICE'));