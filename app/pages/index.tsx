import Landing from "@components/Landing";
import styles from "@styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";
import { VStack, Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import Explore from "@components/Explore";
import { onboardUser } from "@utils/web3";
import withTransition from "@components/withTransition";

function Home() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const { address, isConnected } = useAccount();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const saveUser = useCallback(async () => {
    await onboardUser(address);
  }, [address]);

  useEffect(() => {
    if (address) {
      saveUser();
    }
  }, [address, saveUser]);

  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <div className={styles.container}>
        <VStack className={styles.titleContainer}>
          <Text className={styles.mobileText}>
            This application is not supported on mobile or tablet at the moment.
            Thank you for understanding.
          </Text>
        </VStack>
      </div>
    );
  }

  return !isConnected ? <Landing /> : <Explore />;
}

export default withTransition(Home);
