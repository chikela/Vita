import { Request, Response, NextFunction } from 'express';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.query as { userId: string };
  console.log('ON isAuth CURRENT USER IS : ' + userId);

  if (!userId) {
    return res.status(401).json({
      error: 'You are not authenticated!',
    });
  }

  next();
};
