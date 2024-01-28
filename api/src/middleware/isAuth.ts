import { Request, Response, NextFunction } from 'express';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
 console.log("ISauth");
 //const token = req.headers.authorization.split(" ")[1];
console.log(req.cookies.jwt);
  if (!req.user) {
    return res.status(401).json({
      error: 'You are not authenticated!',
    });
  }

  next();
};
