import { Request, Response } from 'express';

export class Service {
  handleHealthService = (_req: Request, res: Response) => {
    res.send('The api is working !');
  };
}
