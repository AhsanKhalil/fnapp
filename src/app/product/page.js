
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Apple iPhone 15', price: 999, description: 'Latest iPhone model.' },
  { id: 2, name: 'Samsung Galaxy S25', price: 899, description: 'New flagship phone.' },
  { id: 3, name: 'Google Pixel 8', price: 799, description: 'Google’s newest phone.' },
];

export default function Home() {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
