import express, { Request, Response } from "express";
import db from "../../firebase/firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

export const questsRouter = express.Router();

// fetch all quests: https://journey-server.onrender.com/api/quests/
questsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const query = collection(db, "quests");
    const querySnap: any = await getDocs(query);

    const fetchedQuests: any = [];

    if (querySnap) {
      querySnap.forEach((doc: any) => {
        fetchedQuests.push(doc.data());
      });
    }

    res
      .status(200)
      .send({ message: "Successfully fetched", quests: fetchedQuests });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "server error" });
  }
});

// fetch specific quest: https://journey-server.onrender.com/api/quests/V2zbf8iYGGGzFnkXQ6tB
questsRouter.get("/:questId", async (req: Request, res: Response) => {
  try {
    const { questId } = req.params;

    const docRef = doc(db, "quests", questId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).send(docSnap.data());
    } else {
      res.status(404).send({ message: "Quest not found" });
    }
    return;
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "server error" });
  }
});
