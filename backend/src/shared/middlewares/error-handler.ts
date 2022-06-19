import { Request, Response, NextFunction } from "express";

import AppError from "../errors/app-error";
import logger from "../utils/logger";

class ErrorHandler {
    public static execute(err: Error, _: Request, res: Response, __: NextFunction) {
        logger.error(err);

        if (err instanceof AppError) {
            return res.status(err.status).json({ message: err.message });
        }
        
        return res.status(500).json(err);
    }
}

export default ErrorHandler;