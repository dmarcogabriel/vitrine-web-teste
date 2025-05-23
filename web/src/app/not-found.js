import {Button} from '@app/components/ui/button';
import {Card, CardContent, CardFooter} from '@app/components/ui/card';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <Card>
        <CardContent>
          <h2 className="text-3xl">Página não encontrada.</h2>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Link href="/">
            <Button>Voltar a lista de Produtos</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
