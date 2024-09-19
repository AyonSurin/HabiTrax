// import { Request, Response, NextFunction } from 'express';
// import admin from '../config/firebase';

// export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token!);
//     req.user = decodedToken;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// };
