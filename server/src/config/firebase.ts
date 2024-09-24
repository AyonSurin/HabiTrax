import * as admin from "firebase-admin";
import * as dotenv from "dotenv";

dotenv.config(); // Load env variables

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

export const auth = admin.auth();
export default firebaseApp;
