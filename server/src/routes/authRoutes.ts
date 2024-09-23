import { Router } from "express";
import firebaseApp, { auth } from "../config/firebase"; // Adjust import as necessary

const router = Router();

router.post("/signup", async (req, res) => {
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
});

export default router;
