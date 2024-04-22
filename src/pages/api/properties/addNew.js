// pages/api/addProperty.js

import { initializeFirebaseAdmin } from "@/lib/firebase/initializeFirebaseAdmin";
import admin from "firebase-admin";

export default async function handler(req, res) {
  initializeFirebaseAdmin();
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const data = req.body;

  try {
    await admin.firestore().collection("properties").add(data);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
