import { Request, Response } from 'express';
import { Service } from '../services/health.service';

export class Controller {
  private service = new Service();

  handleHealthController = (req: Request, res: Response) => {
    this.service.handleHealthService(req, res);
  };
}
