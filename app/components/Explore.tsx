import { Text, VStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import QuestCard from "./QuestCard";
import { useEffect, useState } from "react";
import { mockQuests } from "@data/static";
import withTransition from "./withTransition";

const JOURNEY_API_URL =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? process.env.NEXT_PUBLIC_API_PROD
    : process.env.NEXT_PUBLIC_API_DEV;

function Explore() {
  const router = useRouter();

  const [fetchedQuests, setFetchedQuests] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  function handleClick(e: any, id: string) {
    e.preventDefault();
    router.push(`/quest/${id}`);
  }

  if (isLoading)
    return (
      <VStack className={styles.loadingContainer}>
        <Spinner color="white" size="xl" />
      </VStack>
    );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Text className={styles.title}>Explore Quests</Text>
        <SimpleGrid columns={2} gap={5} pt={10}>
          {mockQuests
            .filter((q) => !q.isJourney)
            .sort((a, b) => a.order - b.order)
            .map(
              ({
                title,
                description,
                nft_reward,
                token_reward,
                partner,
                xp,
                id,
              }) => (
                <QuestCard
                  title={title}
                  description={description}
                  partner={partner}
                  nft_reward={nft_reward}
                  token_reward={token_reward}
                  xp={xp}
                  handleClick={(e) => handleClick(e, id)}
                  key={id}
                />
              )
            )}
        </SimpleGrid>
      </main>
    </div>
  );
}

export default withTransition(Explore);
