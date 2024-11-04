// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-lg">
          E-Commerce
        </Link>
        <div className="flex space-x-4">
          <Link href="/products" className="text-white hover:text-gray-300">
            Products
          </Link>
          <Link href="/cart" className="text-white hover:text-gray-300">
            Cart
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;



