import db from "../firebase/firebase";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { mockQuests } from "./static";

function migration() {
  mockQuests.forEach(async (quest) => {
    const docRef = doc(db, "quests", quest.order.toString());
    await updateDoc(docRef, quest);
  });
}

migration();
