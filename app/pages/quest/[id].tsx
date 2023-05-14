import {
  VStack,
  Text,
  HStack,
  Button,
  Image,
  useToast,
  Box,
  Spinner,
  Link as ChakraLink,
} from "@chakra-ui/react";
import styles from "@styles/Quest.module.css";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CheckCircleIcon, LockIcon } from "@chakra-ui/icons";
import Error404 from "@components/404";
import Confetti from "react-confetti";
import { FaTwitter } from "react-icons/fa";
import {
  toastClaimFailure,
  toastClaimSuccess,
  toastVerifyFailure,
  toastVerifySuccess,
} from "@utils/toast";
import { useAccount } from "wagmi";
import { mockQuests } from "@data/static";

const JOURNEY_API_URL =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? process.env.NEXT_PUBLIC_API_PROD
    : process.env.NEXT_PUBLIC_API_DEV;

function Quest() {
  const { address } = useAccount();

  const toast = useToast();
  const router = useRouter();
  const { id: questId } = router.query;

  const [fetchedUser, setFetchedUser] = useState<any>();
  // const [fetchedQuest, setFetchedQuest] = useState<any>();

  const [isQuestLoading, setQuestLoading] = useState<boolean>(false);
  const [isStartLoading, setStartLoading] = useState<boolean>(false);
  const [isVerifyLoading, setVerifyLoading] = useState<boolean>(false);
  const [isClaimLoading, setClaimLoading] = useState<boolean>(false);

  const connectTwitter = useCallback(
    (e: any) => {
      e.preventDefault();
      router.push("/twitter");
    },
    [router]
  );

  const isQuestActive = false;
  const isQuestCompleted = false;
  const isQuestRewarded = false;

  const verifyQuest = () => {};
  const claimReward = () => {};
  const startQuest = () => {};
  const currentStep = 0;

  const fetchedQuest = mockQuests.find((q) => q.id === questId);
  const questSteps = Object.values(mockQuests[0].steps);

  return (
    <VStack className={styles.container}>
      {isQuestRewarded && (
        <Confetti width={1450} height={1000} numberOfPieces={100} />
      )}
      {fetchedQuest && (
        <HStack alignItems="flex-start" gap={6}>
          <VStack
            className={
              isQuestCompleted
                ? `${styles.rewardContainer} ${styles.questCompleted}`
                : styles.rewardContainer
            }
          >
            <Text className={styles.rewardTitle}>Quest Reward</Text>
            {fetchedQuest.token_reward && (
              <RewardStep
                title={`$${fetchedQuest.token_reward.fiat_amount} in ${fetchedQuest.token_reward.symbol}`}
                description="Tokens will be airdropped into your wallet."
                stepNum={1}
              />
            )}
            {fetchedQuest.nft_reward && (
              <RewardStep
                title={`${fetchedQuest.nft_reward.title}`}
                description={`${fetchedQuest.nft_reward.description}`}
                imageUrl={`${fetchedQuest.nft_reward.image_url}`}
                stepNum={2}
              />
            )}
            {fetchedQuest.xp && (
              <RewardStep
                title={`${fetchedQuest.xp} XP`}
                description="Collect experience points to level up on Journey."
                stepNum={3}
              />
            )}
            <Button
              className={styles.primaryButton}
              onClick={claimReward}
              isDisabled={!isQuestCompleted || isQuestRewarded}
            >
              {isQuestRewarded ? (
                "Reward claimed"
              ) : isClaimLoading ? (
                <Spinner />
              ) : (
                "Claim Reward"
              )}
            </Button>
          </VStack>
          <VStack className={styles.questContainer}>
            <HStack pb="1rem" gap={2}>
              <Image
                src={fetchedQuest.partner.image_url}
                alt="hi"
                className={styles.dappLogo}
              ></Image>
              <VStack className={styles.questTitleContainer}>
                <Text className={styles.questTitle}>{fetchedQuest.title}</Text>
                <Text className={styles.questSubtitle}>
                  {fetchedQuest.description}
                </Text>
              </VStack>
            </HStack>
            <HStack width="100%" justifyContent="space-between" pb=".5rem">
              <Text>
                My progress:{" "}
                {isQuestRewarded || isQuestCompleted
                  ? "Completed!"
                  : !isQuestActive
                  ? "Not Started"
                  : `${currentStep}/${questSteps.length} completed`}
              </Text>
              <HStack>
                <Text>
                  {fetchedQuest.completed_users.length} users rewarded
                </Text>
              </HStack>
            </HStack>
            <Box className={styles.divider} />
            <VStack pt=".5rem" gap={2}>
              {questSteps.map(
                (
                  { title: stepTitle, description, isTwitter, start_url },
                  stepIdx
                ) => (
                  <QuestStep
                    key={stepIdx}
                    stepNum={stepIdx + 1}
                    title={stepTitle}
                    user={fetchedUser}
                    startUrl={start_url}
                    description={description}
                    verifyQuest={verifyQuest}
                    startQuest={startQuest}
                    connectTwitter={connectTwitter}
                    isStartLoading={isStartLoading}
                    isVerifyLoading={isVerifyLoading}
                    isCompleted={currentStep > stepIdx}
                    isLocked={currentStep < stepIdx}
                    isQuestActive={isQuestActive}
                    isTwitter={isTwitter}
                  />
                )
              )}
            </VStack>
          </VStack>
        </HStack>
      )}
    </VStack>
  );
}

type QuestStepProps = {
  stepNum: number;
  title: string;
  description: string;
  startUrl: string;
  user: any;
  verifyQuest: () => void;
  startQuest: () => void;
  connectTwitter: (e: any) => void;
  isStartLoading: boolean;
  isVerifyLoading: boolean;
  isCompleted?: boolean;
  isLocked?: boolean;
  isQuestActive?: boolean;
  isTwitter?: boolean;
};

function QuestStep({
  stepNum,
  title,
  description,
  startUrl,
  user,
  verifyQuest,
  startQuest,
  connectTwitter,
  isCompleted,
  isLocked,
  isQuestActive,
  isStartLoading,
  isVerifyLoading,
  isTwitter,
}: QuestStepProps) {
  return (
    <HStack
      className={styles.questStep}
      opacity={isLocked || isCompleted ? 0.55 : 1}
    >
      <Box minWidth="20px">
        {isLocked ? (
          <LockIcon />
        ) : isCompleted ? (
          <CheckCircleIcon />
        ) : (
          <Text>{stepNum}</Text>
        )}
      </Box>
      <VStack alignItems="flex-start" width="100%">
        <Text className={styles.questStepTitle}>{title}</Text>
        <Text className={styles.questStepDesc}>
          {description} Start{" "}
          <ChakraLink href={startUrl} isExternal>
            <Text as="span" fontWeight={700} color="#bdbdbd">
              here
            </Text>
          </ChakraLink>
          .
        </Text>
      </VStack>
      <HStack w="120px">
        {!isQuestActive && stepNum === 1 ? (
          <Button
            className={styles.primaryButton}
            onClick={startQuest}
            isDisabled={isLocked}
          >
            {isStartLoading ? <Spinner /> : "Start"}
          </Button>
        ) : user && !user.twitter.user_id && isTwitter ? (
          <Button
            className={styles.twitterButton}
            onClick={connectTwitter}
            isDisabled={isLocked}
          >
            <HStack>
              <FaTwitter />
              <Text>Connect</Text>
            </HStack>
          </Button>
        ) : (
          !isCompleted && (
            <Button
              className={styles.secondaryButton}
              onClick={verifyQuest}
              isDisabled={isLocked}
            >
              {isVerifyLoading && !isCompleted && !isLocked ? (
                <Spinner />
              ) : (
                "Verify"
              )}
            </Button>
          )
        )}
      </HStack>
    </HStack>
  );
}

type RewardStepProps = {
  stepNum: number;
  title: string;
  description: string;
  imageUrl?: string;
};

function RewardStep({
  stepNum,
  title,
  description,
  imageUrl,
}: RewardStepProps) {
  return (
    <HStack className={styles.rewardStep}>
      <Box minWidth="20px">
        <Text>{stepNum}</Text>
      </Box>
      <VStack alignItems="flex-start" width="100%">
        <Text className={styles.questStepTitle}>{title}</Text>
        <Text className={styles.questStepDesc}>{description}</Text>

        {imageUrl && (
          <HStack width="90%" justifyContent="center" pt="1rem">
            <Image src={imageUrl} alt="nft image" className={styles.nftImage} />
          </HStack>
        )}
      </VStack>
    </HStack>
  );
}

export default Quest;
