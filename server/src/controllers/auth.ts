import { Request, Response } from "express";
import firebaseApp from "../config/firebase";
import User from "../models/UserModel"; // Your MongoDB User model
import axios from "axios";

export const signup = async (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password, firstName, lastName } = req.body;

  try {
    const userCredential = await firebaseApp.auth().createUser({
      email: email,
      password: password,
      displayName: firstName,
    });
    console.log("User ID:", userCredential.uid);

    const customToken = await firebaseApp
      .auth()
      .createCustomToken(userCredential.uid);

    const newUser = new User({
      user_id: userCredential.uid, // Use userCredential.user.uid
      email: email,
      first_name: firstName,
      last_name: lastName,
    });

    await newUser.save();

    res.status(201).json({ uid: userCredential.uid, customToken: customToken });
  } catch (error: any) {
    console.error(error);

    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const user = req.body.user;
  const token = req.body._tokenResponse.idToken;
  console.log(user.displayName);

  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }

  try {
    // Step 2: Verify the Firebase token
    const decodedToken = await firebaseApp.auth().verifyIdToken(token, false);
    const { email, uid } = decodedToken;

    console.log(email);

    // Step 3: Check if the user exists in the database
    let userFound = await User.findOne({ user_id: uid });
    console.log(userFound);

    if (!userFound) {
      // If the user doesn't exist, create a new user entry
      userFound = new User({
        user_id: uid,
        email: email,
        first_name: user.displayName || "", // If sent from frontend
        last_name: user.displayName || "",
        createdAt: new Date(),
      });

      await userFound.save();
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        uid: uid,
        email: user.email,
        display_name: user.display_name,
      },
    });
  } catch (error: any) {
    console.error("Error occured at login\n\n:", error);
    return res.status(403).json({ message: "Unauthorized: Invalid token" });
  }
};
