import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import { Button, HStack, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import { abridgeAddress } from "@utils/abridgeAddress";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAccount, useDisconnect } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();
  const { disconnect, isLoading } = useDisconnect();
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);

  if (!address) return null;

  function handleDisconnect() {
    disconnect();
    router.push("/");
  }

  return (
    <HStack className={styles.navbarContainer}>
      <VStack w="100%">
        {/* <Text className={styles.announcement}>
          Please note Journey is in{" "}
          <Text as="span" fontWeight={700}>
            beta mode
          </Text>
          . All quests will be verified on Gnosis mainnet, but rewards will be
          airdropped on Gnosis Chiado Testnet.
        </Text> */}
        <HStack className={styles.navbar}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              cursor="pointer"
              className={styles.logo}
            ></Image>
          </Link>
          <HStack className={styles.navLeftSection}>
            <Link href="/journey/1">
              <Text>Journey</Text>
            </Link>
            <Link href="/profile">
              <Text>My Profile</Text>
            </Link>
            <Link href="/community">
              <Text>Community</Text>
            </Link>
            {address && (
              <Button
                className={styles.addressPill}
                onClick={handleDisconnect}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                {isLoading ? (
                  <Spinner color="white" />
                ) : isHover ? (
                  "Disconnect"
                ) : (
                  abridgeAddress(address)
                )}
              </Button>
            )}
          </HStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Navbar;
