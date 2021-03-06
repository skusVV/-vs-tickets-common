
export abstract class CustomErrorAbstract extends Error {
    abstract statusCode: number;

    protected constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomErrorAbstract.prototype);
    }

    abstract serializeErrors(): { message: string; field?: string }[];
}