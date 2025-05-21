import {getAllProducts} from '@app/services/products';
import {ProductCard} from './ProductCard';
import {Header} from '@app/components/ui/header';

export default async function Home() {
  const data = await getAllProducts();

  return (
    <main>
      <Header />

      <div className="p-2">
        <div className="flex flex-col gap-2 p-2">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
