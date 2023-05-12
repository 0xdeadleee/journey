import { Button, VStack, Image, Box, Text, Spinner } from "@chakra-ui/react";
import styles from "@styles/Home.module.css";
import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function Landing() {
  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div className={styles.container}>
      <main className={styles.landing}>
        <VStack gap={3} zIndex={1}>
          <VStack>
            <Box w={400}>
              <Image src="/logo.png" alt="journey" />
            </Box>
            <Text mt="-2 !important">
              Please connect your wallet to continue.
            </Text>
          </VStack>
          <Button onClick={() => connect()} className={styles.connectButton}>
            {isLoading ? <Spinner color="white" /> : "Connect Wallet"}
          </Button>
        </VStack>
        <Box className={styles.ellipseOne}></Box>
      </main>
    </div>
  );
}

export default Landing;
