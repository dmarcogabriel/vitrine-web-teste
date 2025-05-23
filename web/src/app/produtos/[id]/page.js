import {Header} from '@app/components/ui/header';
import {formatMoney} from '@app/lib/moneyFormatter';
import {getProductById} from '@app/services/product.service';
import Image from 'next/image';

function getInstallmentAmount(amount) {
  return amount / 10;
}

export async function generateMetadata({params}) {
  const {id} = await params;
  const {product} = await getProductById(id);

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({params}) {
  const {id} = await params;

  const {product} = await getProductById(id);

  return (
    <main>
      <Header />

      <div className="flex flex-col md:flex-row px-6 py-6 md:px-[12rem] gap-[2rem] md:gap-[6rem] md:items-end">
        <div className="flex flex-col gap-[2rem]">
          <h1 className="text-xl font-semibold">{product.name}</h1>

          <div className="flex justify-center w-full">
            <Image
              src="/product_placeholder.jpg"
              alt={product.name}
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <div>
            <p className="text-3xl">{formatMoney(product.amount)}</p>
            <p>
              em
              <span className="text-green-600">
                {` 10x de ${formatMoney(getInstallmentAmount(product.amount))}`}
              </span>
            </p>
          </div>

          <p>{product.description}</p>
        </div>
      </div>
    </main>
  );
}
