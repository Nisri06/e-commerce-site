export default function Checkout() {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="heading-lg">Checkout</h1>
        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="btn-primary w-full">Place Order</button>
        </form>
      </div>
    );
  }
  