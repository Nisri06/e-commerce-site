import { products } from '../../../data/products';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, price } = req.body;
    const newProduct = { id: Date.now(), name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  }
}
