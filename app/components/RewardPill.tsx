import { Text, HStack, Image, Box } from "@chakra-ui/react";
import styles from "@styles/Home.module.css";

type RewardPillProps = {
  label: string;
  imageUrl?: string;
};

export default function RewardPill({ imageUrl, label }: RewardPillProps) {
  return (
    <HStack className={styles.rewardPill}>
      {imageUrl && (
        <Box w={5}>
          <Image src={imageUrl} alt="coin icon" />
        </Box>
      )}
      <Text>{label}</Text>
    </HStack>
  );
}
