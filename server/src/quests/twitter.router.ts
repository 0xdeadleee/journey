import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { Client } from "twitter-api-sdk";
import {
  query,
  collection,
  where,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "../../firebase/firebase";

dotenv.config();

export const twitterRouter = express.Router();

const client = new Client(process.env.BEARER_TOKEN as string);

// verify tweet
twitterRouter.get("/tweet/:tweetId/", async (req: Request, res: Response) => {
  try {
    const { tweetId } = req.params;

    const { data } = await client.tweets.findTweetById(tweetId, {
      "tweet.fields": ["author_id"],
      expansions: ["author_id"],
      "user.fields": [
        "description",
        "entities",
        "id",
        "name",
        "profile_image_url",
        "username",
      ],
    });

    const { data: userData } = await client.users.findUserById(data.author_id);

    const { username } = userData;

    const fetchedId = data.text.split("uuid:")[1];

    const q = query(collection(db, "users"), where("uuid", "==", fetchedId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (docu: any) => {
      if (docu) {
        const { address, uuid, twitter } = docu.data();

        if (fetchedId === uuid) {
          const docRef = doc(db, "users", address);

          await updateDoc(docRef, {
            twitter: { user_id: data.author_id, username: username },
          });
        }
        res
          .status(200)
          .send({ message: "Twitter account verified.", username: username });
      } else {
        res.status(404).send({ message: "User not found" });
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

// verify following
twitterRouter.get(
  "/follow/:userId/:partnerId",
  async (req: Request, res: Response) => {
    try {
      const { userId, partnerId } = req.params;

      const { data } = await client.users.usersIdFollowing(userId, {
        "user.fields": ["id", "name", "username"],
      });

      const found = data?.find(({ id }) => id === partnerId);

      if (found) {
        res.status(200).send("found!");
      } else {
        res.status(404).send("not found");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
);

// verify following:
twitterRouter.get("/test/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const { data } = await client.users.usersIdFollowing(userId, {
      "user.fields": ["id", "name", "username"],
    });

    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("not found");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
