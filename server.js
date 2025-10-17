const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productRoutes = require('../routes/products');

const app = express();
const PORT = 4000;

app.use((req, res, next) => {

  console.log(`${req.method} ${req.url}`);
  next();
});


app.use(cors());
app.use(express.json());


app.use('/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU cores: ${os.cpus().length}`);
});
   

