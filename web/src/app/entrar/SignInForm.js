'use client';

import {Button} from '@app/components/ui/button';
import {signIn} from './auth.service';
import {useActionState, useEffect} from 'react';
import {useSearchParams, useRouter} from 'next/navigation';
import {Alert, AlertTitle} from '@app/components/ui/alert';
import {TextInput} from '@app/components/ui/inputs';

export const SignInForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [state, formAction, pending] = useActionState(signIn, {
    success: false,
    message: '',
    inputErrors: null,
  });

  useEffect(() => {
    if (state.success) {
      const redirectPath = searchParams.get('redirect') || '/';

      router.push(redirectPath);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {state.message ? (
        <Alert variant="destructive">
          <AlertTitle>{state.message}</AlertTitle>
        </Alert>
      ) : null}

      <div className="flex flex-col gap-4">
        <TextInput
          label="E-mail"
          type="email"
          name="email"
          placeholder="ex: email@test.com"
          error={state.inputErrors && state.inputErrors['email']}
        />
        <TextInput
          label="Senha"
          type="password"
          name="password"
          error={state.inputErrors && state.inputErrors['password']}
        />
      </div>

      <Button disabled={pending}>{pending ? 'Entrando...' : 'Entrar'}</Button>
    </form>
  );
};
