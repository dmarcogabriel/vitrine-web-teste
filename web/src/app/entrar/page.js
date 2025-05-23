import {Card, CardContent} from '@app/components/ui/card';
import {Header} from '@app/components/ui/header';
import {SignInForm} from './SignInForm';

export default function SignIn() {
  return (
    <main>
      <Header />

      <div className="px-6 py-6 md:px-[12rem]">
        <Card className="md:px-[10rem]">
          <CardContent className="flex flex-col gap-4 py-2">
            <h1>Entrar</h1>

            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
