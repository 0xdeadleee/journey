import { VStack, Text, Image, Box } from "@chakra-ui/react";
import styles from "@styles/Quest.module.css";

function Error404() {
  return (
    <VStack className={styles.container}>
      <Box w={400} mt={5} mb={10}>
        <Image src="/404.png" alt="404"></Image>
      </Box>
      <Text className={styles.title404}>
        Oops... Houston, we have a problem
      </Text>
      <Text className={styles.subtitle404}>
        {"Don't worry, we will get you back on track in no time!"}
      </Text>
    </VStack>
  );
}

export default Error404;
