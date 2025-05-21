import {Header} from '@app/components/ui/header';
import {formatMoney} from '@app/lib/moneyFormatter';
import {getProductById} from '@app/services/products';
import Image from 'next/image';

function getInstallmentAmount(amount) {
  return amount / 10;
}

export default async function ProductDetails({params}) {
  const {id} = await params;

  const {product} = await getProductById(id);

  return (
    <main>
      <Header />

      <div className="flex flex-col px-4 py-2 gap-[2rem]">
        <h1 className="text-xl">{product.name}</h1>

        <div className="flex justify-center w-full">
          <Image
            src="/product_placeholder.jpg"
            alt={product.name}
            width={250}
            height={250}
          />
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
