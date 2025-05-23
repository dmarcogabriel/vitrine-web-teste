type InputError = {
  path: string;
  reason: string;
};

export class CustomError extends Error {
  public readonly status: number;
  public readonly inputErrors: InputError[];

  constructor(message: string, status: number, inputErrors?: InputError[]) {
    super(message);
    this.status = status;
    this.inputErrors = inputErrors ?? [];
  }
}
