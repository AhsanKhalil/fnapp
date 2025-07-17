export default function Product({ product }) {
  if (!product) {
    return <div className="text-red-500 text-center text-lg">Product not available</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Simple Image Test */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-56 object-cover rounded-t-lg" 
      />
      <div className="p-6">
        <h2 className="text-2xl text-gray-800 font-semibold mb-2">{product.name}</h2>
        <p className="text-xl text-blue-600 font-semibold mb-4">Price: ${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
      </div>
    </div>
  );
}
