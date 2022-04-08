const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const usuarioRouter = require('./src/routes/usuario_routes');
app.use('/usuarios', usuarioRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
