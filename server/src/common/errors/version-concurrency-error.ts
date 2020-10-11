import { CustomError } from "./custom-error";

export class VersionConcurrencyError extends CustomError {
    statusCode = 402;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, VersionConcurrencyError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}
