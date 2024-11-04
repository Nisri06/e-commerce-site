export default function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
      <p className="text-primary font-bold mt-2">${product.price}</p>
      <button className="btn-primary mt-4 w-full">Add to Cart</button>
    </div>
  );
}
