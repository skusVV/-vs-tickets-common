import { Response, Request, NextFunction} from 'express';
import { CustomErrorAbstract } from '../errors/custom-error.abstract';

export const requestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomErrorAbstract) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    console.error(err);
    return res.status(400).send({ errors: [{ message: 'Something went wrong.' } ]});
}