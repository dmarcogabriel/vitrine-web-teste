export class RequestError extends Error {
  constructor({message, inputErrors}) {
    super(message);
    this.inputErrors = inputErrors;
  }
}
