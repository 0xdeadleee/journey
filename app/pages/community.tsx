import {
  VStack,
  Text,
  HStack,
  Image,
  Link as ChakraLink,
  Spinner,
} from "@chakra-ui/react";
import styles from "@styles/Community.module.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Landing from "@components/Landing";
import { abridgeAddress } from "@utils/abridgeAddress";
import { users } from "@data/users";
import Error404 from "@components/404";
import { useAccount } from "wagmi";

const JOURNEY_API_URL =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? process.env.NEXT_PUBLIC_API_PROD
    : process.env.NEXT_PUBLIC_API_DEV;

function Community() {
  const { address } = useAccount();
  const [fetchedUsers, setFetchedUsers] = useState<any>([]);
  const [isUsersLoading, setUsersLoading] = useState<boolean>(false);

  const fetchUsers = useCallback(async () => {
    setUsersLoading(true);
    try {
      const response = await fetch(`${JOURNEY_API_URL}/api/users`);
      if (response.status === 200) {
        const users = await response.json();
        setFetchedUsers(users);
      }
    } catch (err) {
      console.log(err);
    }
    setUsersLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = useMemo(() => {
    if (fetchedUsers.length == 0) return users;
    const newUsers = JSON.parse(JSON.stringify(users));
    newUsers.push(...fetchedUsers);
    return newUsers;
  }, [fetchedUsers]);

  if (!address) return <Landing />;

  if (isUsersLoading)
    return (
      <VStack className={styles.loadingContainer}>
        <Spinner color="white" size="xl" />
      </VStack>
    );

  if (fetchedUsers.length === 0) return <Error404 />;

  return (
    <VStack className={styles.container}>
      <VStack w="100%" pb="2rem">
        <Text className={styles.title}>Community Leaderboard</Text>
      </VStack>
      <HStack alignItems="flex-start" gap="1rem">
        <VStack>
          <HStack className={styles.tableHeaderContainer}>
            <Text className={styles.tableHeader1}>Rank</Text>
            <Text className={styles.tableHeader2}>Username</Text>
            <Text className={styles.tableHeader3}>Address</Text>
            <Text className={styles.tableHeader4}>XP</Text>
            <Text className={styles.tableHeader5}>Tier</Text>
            <Text className={styles.tableHeader6}>Date joined</Text>
          </HStack>
          {filteredUsers
            .sort((a, b) => b.xp - a.xp)
            .map(({ username, address, xp, joinedAt, id }, idx) => (
              <HStack key={id} className={styles.tableRowContainer}>
                {idx === 0 ? (
                  <VStack className={styles.tableHeader1}>
                    <Image
                      alt="badge"
                      src="/1st.png"
                      width="40px"
                      height="40px"
                    />
                  </VStack>
                ) : idx === 1 ? (
                  <VStack className={styles.tableHeader1}>
                    <Image
                      alt="badge"
                      src="/2nd.png"
                      width="40px"
                      height="40px"
                    />
                  </VStack>
                ) : idx === 2 ? (
                  <VStack className={styles.tableHeader1}>
                    <Image
                      alt="badge"
                      src="/3rd.png"
                      width="40px"
                      height="40px"
                    />
                  </VStack>
                ) : (
                  <Text className={styles.tableHeader1}>{idx}</Text>
                )}
                <Text className={styles.tableHeader2}>
                  {username ?? "untitled user"}
                </Text>
                <Text className={styles.tableHeader3}>
                  {abridgeAddress(address)}
                </Text>
                <Text className={styles.tableHeader4}>{xp}</Text>
                <Text className={styles.tableHeader5}>Beta</Text>
                <Text className={styles.tableHeader6}>{joinedAt}</Text>
              </HStack>
            ))}
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Community;
