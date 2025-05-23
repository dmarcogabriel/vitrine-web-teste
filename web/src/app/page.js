import {getAllProducts} from '@app/services/product.service';
import {ProductCard} from './ProductCard';
import {Header} from '@app/components/ui/header';

export default async function Home() {
  const data = await getAllProducts();

  return (
    <main>
      <Header />

      <div className="px-6 py-6 md:px-[12rem]">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
