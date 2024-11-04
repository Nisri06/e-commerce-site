// Import necessary components and functions
import ProductCard from '../components/ProductCard';
import { getProductsProducts } from '../lib/api';

// pages/index.js
export default function Home({ products }) {
  return (
    <div>
      <div className="hero h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
        <div className="flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to ShopName</h1>
          <p className="mt-4 text-lg">Find your style, find your fit.</p>
          <button className="btn-primary mt-6">Shop Now</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Fetch products at build time
export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
