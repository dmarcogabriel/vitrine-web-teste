export class RequestError extends Error {
  constructor({message, inputErrors, status}) {
    super(message);
    this.inputErrors = inputErrors;
    this.status = status;
  }
}
