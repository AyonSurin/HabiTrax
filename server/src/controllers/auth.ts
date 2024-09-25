import { Request, Response } from "express";
import firebaseApp from "../config/firebase";

export const signup = async (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password, firstName, lastName } = req.body;

  try {
    const userCredential = await firebaseApp.auth().createUser({
      email: email,
      password: password,
      displayName: firstName + " " + lastName,
    });
    console.log("Email:" + email + "\nPassword:" + password);

    res.status(201).json({ uid: userCredential.uid });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
