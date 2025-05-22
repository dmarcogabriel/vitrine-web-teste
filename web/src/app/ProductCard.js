import {Button} from '@app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@app/components/ui/card';
import {formatMoney} from '@app/lib/moneyFormatter';
import Image from 'next/image';
import Link from 'next/link';

export function ProductCard({product}) {
  return (
    <Link href={`/produtos/${product.id}`}>
      <Card>
        <div className="flex justify-center w-full bg-black">
          <Image
            src="/product_placeholder.jpg"
            alt={`${product.name} foto`}
            width={150}
            height={150}
          />
        </div>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="text-blue-600 font-bold">
            {formatMoney(product.amount)}
          </CardDescription>
        </CardHeader>

        <CardContent className="line-clamp-2">
          <p>{product.description}</p>
        </CardContent>

        <CardFooter>
          <Button className="w-full">Ver Detalhes</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
