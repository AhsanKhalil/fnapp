import Product from './Product';

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
}
