import {CustomError} from '@app/common/errors/CustomError';
import {Request} from 'express';
import {z, ZodError} from 'zod';

const PASSWORD_MIN_LENGTH = 6;

const schema = z.object({
  email: z
    .string({
      required_error: 'E-mail é obrigatório.',
      invalid_type_error: 'E-mail deve ser do tipo texto.',
    })
    .email('E-mail inválido.'),
  password: z
    .string({
      required_error: 'Senha é Obrigatória.',
      invalid_type_error: 'Senha deve ser do tipo texto.',
    })
    .min(
      PASSWORD_MIN_LENGTH,
      `Senha deve conter pelo menos ${PASSWORD_MIN_LENGTH} dígitos.`,
    ),
});

export const validate = (body: Request['body']) => {
  try {
    return schema.parse(body);
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = err.errors.map((error) => {
        const [path] = error.path;
        return {
          path: String(path),
          reason: error.message,
        };
      });

      throw new CustomError('Credenciais Inválidas.', 400, errors);
    }

    throw new CustomError('Credenciais Inválidas.', 400);
  }
};
