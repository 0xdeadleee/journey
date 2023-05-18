import * as dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { questsRouter } from "./quests/quests.router";
import { verifyRouter } from "./quests/verify.router";
import { usersRouter } from "./quests/users.router";
import { twitterRouter } from "./quests/twitter.router";
import { journeyRouter } from "./quests/journey.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app: Express = express();
const port = process.env.PORT ?? 8888;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/quests", questsRouter);
app.use("/api/journey", journeyRouter);
app.use("/api/verify", verifyRouter);
app.use("/api/users", usersRouter);
app.use("/api/twitter", twitterRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
