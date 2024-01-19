import { Request, Response, NextFunction } from 'express';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
 console.log("ISauth");
  console.log(req.user);
  if (!req.user) {
    return res.status(401).json({
      error: 'You are not authenticated!',
    });
  }

  next();
};
