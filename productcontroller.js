let products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
];

const getAllProducts = (req, res) => {
  res.json(products);
};

const addProduct = (req, res) => {
  const newProduct = req.body;
  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  newProduct.id = products.length + 1; // simple ID assignment
  products.push(newProduct);
  res.status(201).json(newProduct);
};

module.exports = {
  getAllProducts,
  addProduct,
};