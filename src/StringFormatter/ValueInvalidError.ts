export class ValueInvalidError implements Error {
    constructor(message?: string) {
        this.message = message ?? 'The value is invalid.';
    }

    public readonly name: string = 'ValueInvalidError';
    public readonly message: string;
    public readonly stack?: string;
}
