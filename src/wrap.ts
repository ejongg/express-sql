import { NextFunction, Request, RequestHandler, Response } from 'express'

// Wraps request handlers, passing the error to the errorhandler for cleaner error respose
export const wrap = (
    handler: (req: Request, res: Response, next: NextFunction) => void | PromiseLike<void>
): RequestHandler => (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next)
}
