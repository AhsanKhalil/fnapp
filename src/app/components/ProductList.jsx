import Product from './Product';

const products = [
  { 
    id: 1, 
    name: 'Apple iPhone 15', 
    price: 999, 
    description: 'Latest iPhone model.',
    image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge.jpg' // Placeholder image
  },
  { 
    id: 2, 
    name: 'Samsung Galaxy S25', 
    price: 899, 
    description: 'Samsung’s flagship phone.',
    image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv11.jpg?imbypass=true' // Placeholder image
  },
  { 
    id: 3, 
    name: 'Google Pixel 8', 
    price: 799, 
    description: 'Google’s newest phone.',
    image: 'https://www.dxomark.com/wp-content/uploads/medias/post-157488/Google-Pixel-8-Pro-featured-image-packshot-review.jpg' // Placeholder image
  },
  { 
    id: 1, 
    name: 'Apple iPhone 15', 
    price: 999, 
    description: 'Latest iPhone model.',
    image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.xlarge.jpg' // Placeholder image
  },
  { 
    id: 2, 
    name: 'Samsung Galaxy S25', 
    price: 899, 
    description: 'Samsung’s flagship phone.',
    image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-kv11.jpg?imbypass=true' // Placeholder image
  },
  { 
    id: 3, 
    name: 'Google Pixel 8', 
    price: 799, 
    description: 'Google’s newest phone.',
    image: 'https://www.dxomark.com/wp-content/uploads/medias/post-157488/Google-Pixel-8-Pro-featured-image-packshot-review.jpg' // Placeholder image
  },
];

export default function ProductList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
