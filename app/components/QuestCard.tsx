import { Text, VStack, HStack, Image, Box } from "@chakra-ui/react";
import styles from "@styles/Home.module.css";
import RewardPill from "./RewardPill";

type QuestCardProps = {
  title: string;
  description: string;
  partner: any;
  xp: number;
  nft_reward: any;
  token_reward: any;
  handleClick: (e: any) => void;
  isLocked?: boolean;
};

export default function QuestCard({
  title,
  description,
  partner,
  xp,
  nft_reward,
  token_reward,
  handleClick,
  isLocked,
}: QuestCardProps) {
  return (
    <HStack
      className={isLocked ? styles.lockedQuest : styles.questCard}
      onClick={handleClick}
    >
      <VStack
        width="80%"
        alignItems="flex-start"
        gap={3}
        opacity={isLocked ? 0.55 : 1}
      >
        <VStack alignItems="flex-start">
          <HStack>
            <Box w="36px">
              <Image
                src={partner.image_url}
                alt="partner image"
                borderRadius="100%"
              ></Image>
            </Box>
            <Text className={styles.title}>{title}</Text>
          </HStack>
          <Text className={styles.subtitle}>{description}</Text>
        </VStack>
        <HStack>
          {token_reward && (
            <RewardPill
              imageUrl="/coin.svg"
              label={`$${token_reward.fiat_amount} ${token_reward.symbol}`}
            />
          )}
          {nft_reward && <RewardPill imageUrl="/badge.svg" label="NFT Badge" />}
          <RewardPill imageUrl="/sparkle.svg" label={`${xp} XP`} />
        </HStack>
      </VStack>
      <Box w={144} opacity={isLocked ? 0.55 : 1}>
        <Image
          src={nft_reward.preview_url}
          alt="altt"
          borderRadius={20}
        ></Image>
      </Box>
    </HStack>
  );
}
