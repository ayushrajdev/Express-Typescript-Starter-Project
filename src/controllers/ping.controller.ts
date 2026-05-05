import { Request, Response } from 'express';

export function pingHandler(req: Request, res: Response): void {
    res.end();
}
