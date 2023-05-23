import {
  VStack,
  Text,
  HStack,
  Image,
  Link as ChakraLink,
  useToast,
  Box,
  Spinner,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import styles from "@styles/Journey.module.css";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import Error404 from "@components/404";
import QuestCard from "@components/Card";
import RewardPill from "@components/RewardPill";
import { CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { toastClaimFailure, toastClaimSuccess } from "@utils/toast";
import { useAccount } from "wagmi";

const JOURNEY_API_URL =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? process.env.NEXT_PUBLIC_API_PROD
    : process.env.NEXT_PUBLIC_API_DEV;

function Quest() {
  const toast = useToast();

  const [currentStep, setCurrentStep] = useState<any>(1);
  const [fetchedUser, setFetchedUser] = useState<any>();
  const [fetchedJourney, setFetchedJourney] = useState<any>([]);
  const [fetchedJourneyAsQuest, setFetchedJourneyAsQuest] = useState<any>();
  const [isSuccessful, setSuccessful] = useState<boolean>(false);
  const [isClaimLoading, setClaimLoading] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { address } = useAccount();

  const { id: journeyId } = router.query;

  const fetchUser = useCallback(async () => {
    if (!address) return;
    try {
      const response = await fetch(`${JOURNEY_API_URL}/api/users/${address}`);
      if (response.status === 200) {
        const user = await response.json();
        setFetchedUser(user);
        return user;
      }
    } catch (err) {
      console.log(err);
    }
  }, [address]);

  const fetchJourney = useCallback(async () => {
    if (!journeyId) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${JOURNEY_API_URL}/api/journey/${journeyId}`
      );
      const journey = await response.json();
      setFetchedJourney(journey);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [journeyId]);

  const fetchJourneyAsQuest = useCallback(async () => {
    if (!journeyId) return;
    // setQuestLoading(true);
    try {
      const response = await fetch(
        `${JOURNEY_API_URL}/api/quests/${journeyId}`
      );
      if (response.status === 200) {
        const quest = await response.json();
        setFetchedJourneyAsQuest(quest);
      }
    } catch (err) {
      console.log(err);
    }
    // setQuestLoading(false);
  }, [journeyId]);

  // claim quest reward
  const claimReward = useCallback(async () => {
    setClaimLoading(true);
    try {
      const response = await fetch(
        `${JOURNEY_API_URL}/api/claim/${journeyId}/${address}`
      );
      if (response.status === 200) {
        toastClaimSuccess(toast);
        await fetchJourneyAsQuest();
      } else {
        toastClaimFailure(toast);
      }
    } catch (err) {
      console.log(err);
    }
    setClaimLoading(false);
  }, [address, fetchJourneyAsQuest, journeyId, toast]);

  // fetches quest
  useEffect(() => {
    if (fetchedJourney.length === 0) {
      fetchJourney();
    }
    if (!fetchedJourneyAsQuest) {
      fetchJourneyAsQuest();
    }
  }, [
    fetchJourney,
    fetchJourneyAsQuest,
    fetchedJourney,
    fetchedJourneyAsQuest,
    journeyId,
  ]);

  const isJourneyCompleted = useMemo(() => {
    if (fetchedJourney.length === 0) return false;
    let hasCompleted = 0;
    fetchedJourney.forEach((quest) => {
      if (quest.completed_users.includes(address)) hasCompleted++;
    });
    return hasCompleted === 3;
  }, [address, fetchedJourney]);

  const isJourneyRewarded = useMemo(
    () =>
      fetchedJourneyAsQuest &&
      fetchedJourneyAsQuest.completed_users.includes(address),
    [address, fetchedJourneyAsQuest]
  );

  if (isLoading)
    return (
      <VStack className={styles.loadingContainer}>
        <Spinner color="white" size="xl" />
      </VStack>
    );

  if (fetchedJourney.length === 0) return <Error404 />;

  return (
    <VStack className={styles.container}>
      <VStack className={styles.questContainer}>
        <HStack pb="1rem" gap={2}>
          <Image src="/gnosis.png" alt="hi" className={styles.dappLogo}></Image>
          <VStack className={styles.questTitleContainer}>
            <Text className={styles.questTitle}>
              Master DeFi on Gnosis Chain
            </Text>
            <Text className={styles.questSubtitle}>
              Master all the DeFi primitive features offered on Gnosis Chain.
            </Text>
          </VStack>
        </HStack>
        <Box className={styles.divider} />
      </VStack>
      <VStack gap={10}>
        {fetchedJourney.map(
          (
            { title, description, nft_reward, completed_users, id, partner },
            idx
          ) => (
            <HStack key={idx} position="relative">
              {idx === 0 && (
                <Image
                  src="/line1.png"
                  alt="line1"
                  className={styles.line1}
                ></Image>
              )}
              {idx % 2 && <Box w="80px"></Box>}
              <HStack>
                {idx % 2 === 0 && (
                  <VStack>
                    {completed_users.includes(address) ? (
                      <CheckCircleIcon />
                    ) : (
                      <Tooltip label="Quest not completed">
                        <VStack zIndex={10}>
                          <NotAllowedIcon />
                        </VStack>
                      </Tooltip>
                    )}
                  </VStack>
                )}
                <QuestCard
                  title={title}
                  description={description}
                  image_url={nft_reward.preview_url}
                  handleClick={() => router.push(`/quest/${id}`)}
                  partner_url={partner.image_url}
                />
                {idx % 2 === 1 && (
                  <VStack>
                    {completed_users.includes(address) ? (
                      <CheckCircleIcon />
                    ) : (
                      <Tooltip label="Quest not completed">
                        <VStack zIndex={10}>
                          <NotAllowedIcon />
                        </VStack>
                      </Tooltip>
                    )}
                  </VStack>
                )}
              </HStack>
              {!(idx % 2) && <Box w="80px"></Box>}
              {idx === 1 && (
                <Image
                  src="/line2.png"
                  alt="line2"
                  className={styles.line2}
                ></Image>
              )}
              {idx === 2 && (
                <Image
                  src="/line3.png"
                  alt="line3"
                  className={styles.line3}
                ></Image>
              )}
            </HStack>
          )
        )}
        <VStack pb="5rem">
          <RewardPill label="Achievement: Gnosis DeFi Expert" />
          <Box w="1" height="10px"></Box>
          <Image
            src="/gnosis.gif"
            alt="gnosis"
            className={styles.achievementBadge}
          />
          <Box w="1" height="10px"></Box>
          <Button
            className={styles.primaryButton}
            onClick={claimReward}
            isDisabled={!isJourneyCompleted || isJourneyRewarded}
          >
            {isJourneyRewarded ? (
              "Reward Unavailable"
            ) : isClaimLoading ? (
              <Spinner />
            ) : (
              "Claim Reward"
            )}
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
}

export default Quest;
