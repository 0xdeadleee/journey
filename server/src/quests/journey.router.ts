import express, { Request, Response } from "express";
import db from "../../firebase/firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

export const journeyRouter = express.Router();

// fetch all journeys: https://journey-server.onrender.com/api/journey/
journeyRouter.get("/", async (req: Request, res: Response) => {
  try {
    const query = collection(db, "journeys");
    const querySnap: any = await getDocs(query);

    const fetchedjourneys: any = [];

    if (querySnap) {
      querySnap.forEach((doc: any) => {
        fetchedjourneys.push(doc.data());
      });
    }

    res
      .status(200)
      .send({ message: "Successfully fetched", journeys: fetchedjourneys });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "server error" });
  }
});

// fetch specific journey: https://journey-server.onrender.com/api/journey/V2zbf8iYGGGzFnkXQ6tB
journeyRouter.get("/:journeyId", async (req: Request, res: Response) => {
  try {
    const { journeyId } = req.params;

    const docRef = doc(db, "journeys", journeyId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quests } = docSnap.data();

      const query = collection(db, "quests");
      const querySnap: any = await getDocs(query);

      const fetchedQuests: any = [];

      if (querySnap) {
        querySnap.forEach((doc: any) => {
          fetchedQuests.push(doc.data());
        });

        const sortedQuests = fetchedQuests
          .filter((q) => !!quests[q.id])
          .sort((a, b) => quests[a.id] - quests[b.id]);

        res.status(200).send(sortedQuests);
      } else {
        res.status(404).send({ message: "journey not found" });
      }
      return;
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "server error" });
  }
});
