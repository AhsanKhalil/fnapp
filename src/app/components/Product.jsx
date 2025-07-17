
// export default function Product({ product }) {
//   return (
//     <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
//       <h2>{product.name}</h2>
//       <p>Price: ${product.price}</p>
//       <p>{product.description}</p>
//     </div>
//   );
// }


export default function Product({ product }) {
  if (!product) {
    return <div style={{ color: 'red' }}>Product not available</div>;
  }

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        transition: 'box-shadow 0.3s ease',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '1.25rem', color: '#333', marginBottom: '0.5rem' }}>
        {product.name}
      </h2>
      <p style={{ color: '#0070f3', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Price: ${product.price}
      </p>
      <p style={{ color: '#555', lineHeight: '1.5' }}>{product.description}</p>
    </div>
  );
}



