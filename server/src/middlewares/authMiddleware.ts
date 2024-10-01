import { Request, Response, NextFunction } from "express";
import firebaseApp from "../config/firebase";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Verify the Firebase token and extract the UID
    const decodedToken = await firebaseApp.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Attach the uid to the request object
    req.body.uid = uid;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error verifying Firebase token:", error);
    return res.status(403).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authenticate;
