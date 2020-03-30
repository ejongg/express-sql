import { NextFunction, Request, Response } from 'express'

export const errorhandler = (err: any, req: Request, res: Response, _: NextFunction) => {
    res.status(err.status || 500).json({
        name: err.name,
        message: err.message,
    })
}
