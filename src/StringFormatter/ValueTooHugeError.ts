export class ValueTooHugeError implements Error {
    constructor(message?: string) {
        this.message = message ?? 'The value is too huge to handle';
    }
    public readonly name: string = 'ValueTooHugeError';
    public readonly message: string;
    public readonly stack?: string;
}
