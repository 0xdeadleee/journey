import {
  Button,
  Input,
  Text,
  Link as ChakraLink,
  VStack,
  HStack,
  Image,
  Box,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Landing from "@components/Landing";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "@styles/Profile.module.css";
import { abridgeAddress } from "@utils/abridgeAddress";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaPencilAlt,
  FaCheck,
} from "react-icons/fa";
import RewardPill from "@components/RewardPill";
import Error404 from "@components/404";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

const JOURNEY_API_URL =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? process.env.NEXT_PUBLIC_API_PROD
    : process.env.NEXT_PUBLIC_API_DEV;

function Profile() {
  const { address } = useAccount();
  const router = useRouter();

  const [fetchedUser, setFetchedUser] = useState<any>();
  const [fetchedQuests, setFetchedQuests] = useState<any[]>([]);
  const [isQuestsLoading, setQuestsLoading] = useState<boolean>(false);
  const [isUserLoading, setUserLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState<string>("");

  const connectTwitter = useCallback(
    (e: any) => {
      e.preventDefault();
      router.push("/twitter");
    },
    [router]
  );

  const goToExplore = useCallback(
    (e: any) => {
      e.preventDefault();
      router.push("/");
    },
    [router]
  );

  const fetchQuests = useCallback(async () => {
    setQuestsLoading(true);
    try {
      const response = await fetch(`${JOURNEY_API_URL}/api/quests`);
      if (response.status === 200) {
        const { quests } = await response.json();
        setFetchedQuests(quests);
      }
    } catch (err) {
      console.log(err);
    }
    setQuestsLoading(false);
  }, []);

  const fetchUser = useCallback(async () => {
    if (!address) return;
    setUserLoading(true);
    try {
      const response = await fetch(`${JOURNEY_API_URL}/api/users/${address}`);
      if (response.status === 200) {
        const user = await response.json();
        setFetchedUser(user);
      }
    } catch (err) {
      console.log(err);
    }
    setUserLoading(false);
  }, [address]);

  function handleUsernameChange(e) {
    e.preventDefault();
    setNewUsername(e.target.value);
  }

  const updateUsername = useCallback(async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: address,
          newUsername: newUsername,
        }),
      };

      const response = await fetch(
        `${JOURNEY_API_URL}/api/users/username`,
        requestOptions
      );

      if (response.status === 200) {
        await fetchUser();
      }
    } catch (e) {
      console.log(e);
    }
  }, [address, fetchUser, newUsername]);

  async function handleEditMode() {
    if (isEditing) {
      await updateUsername();
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  useEffect(() => {
    if (!fetchedUser) {
      fetchUser();
    }
    if (fetchedQuests.length === 0) {
      fetchQuests();
    }
  }, [fetchQuests, fetchUser, fetchedQuests, fetchedUser]);

  const completedQuests = useMemo(() => {
    if (!fetchedUser || fetchedQuests.length === 0) return [];
    const userQuests = Object.keys(fetchedUser.quests);
    const completedQuestIds = userQuests.filter(
      (questId) => fetchedUser.quests[questId].status === "rewarded"
    );
    return fetchedQuests.filter((quest) =>
      completedQuestIds.includes(quest.id)
    );
  }, [fetchedQuests, fetchedUser]);

  const username = useMemo(() => {
    if (!fetchedUser) return "";
    return fetchedUser.username;
  }, [fetchedUser]);

  const isJourneyCompleted = useMemo(() => {
    let completed;
    if (fetchedQuests.length === 0) return false;
    fetchedQuests.forEach((q) => {
      if (q.id === "journey") {
        if (q.completed_users.includes(address)) {
          completed = true;
        }
      }
    });
    return completed;
  }, [address, fetchedQuests]);

  if (!address) return <Landing />;

  if (isUserLoading || isQuestsLoading)
    return (
      <VStack className={styles.loadingContainer}>
        <Spinner color="white" size="xl" />
      </VStack>
    );

  if (!fetchedUser || fetchedQuests.length === 0) return <Error404 />;

  return (
    <VStack pt="6rem" pb="6rem">
      <VStack w="1180px" position="relative">
        <Image src="/cover.png" alt="cover"></Image>
        <HStack className={styles.profileContainer}>
          <HStack w="33%" alignItems="flex-end">
            {/* <RewardPill imageUrl="/medal.svg" label="Platinum" /> */}
            <RewardPill
              imageUrl="/sparkle.svg"
              label={`400 XP`}
              // label={`${fetchedUser.xp} XP`}
            />
          </HStack>
          <VStack w="33%">
            <Image
              src="/profile.png"
              alt="profile"
              className={styles.profileImage}
            ></Image>
            <HStack>
              {isEditing ? (
                <Input
                  placeholder={fetchedUser.username}
                  value={newUsername}
                  onChange={handleUsernameChange}
                  width="80%"
                ></Input>
              ) : (
                <Text className={styles.profileName}>{username}</Text>
              )}
              <VStack className={styles.editIcon} onClick={handleEditMode}>
                {isEditing ? (
                  <FaCheck />
                ) : (
                  <FaPencilAlt className={styles.pencilIcon} />
                )}
              </VStack>
            </HStack>
            <Text className={styles.profileAddress}>
              ({abridgeAddress(address)})
            </Text>
          </VStack>
          <HStack w="33%" justifyContent="flex-end" alignItems="flex-end">
            {fetchedUser.twitter && fetchedUser.twitter.user_id ? (
              <ChakraLink
                href={`https://twitter.com/${fetchedUser.twitter.username}`}
                isExternal
              >
                <HStack className={styles.socialPill}>
                  <FaTwitter />
                  <Text>{fetchedUser.twitter.username}</Text>
                </HStack>
              </ChakraLink>
            ) : (
              <Button className={styles.twitterButton} onClick={connectTwitter}>
                <HStack>
                  <FaTwitter />
                  <Text>Connect</Text>
                </HStack>
              </Button>
            )}
          </HStack>
        </HStack>
      </VStack>
      {completedQuests.length === 0 ? (
        <VStack pt="4rem">
          <Text className={styles.nullTitle}>Welcome to Journey!</Text>
          <Text className={styles.nullSubtitle}>
            Claim your first quest badge by completing a quest.
          </Text>
          <Button onClick={goToExplore}>Go to quests</Button>
        </VStack>
      ) : (
        <VStack pt="2rem">
          <VStack w="100%" alignItems="flex-start">
            <Text className={styles.badgeSectionTitle}>Badges</Text>
          </VStack>
          <SimpleGrid columns={4} gap={5}>
            {completedQuests.slice(0, 4).map(({ id, nft_reward, title }) => (
              <Link href={`/quest/${id}`} key={id}>
                <VStack className={styles.badgeContainer}>
                  <Image
                    alt="nft"
                    src={nft_reward.image_url}
                    className={styles.badgeImage}
                  />
                  <Text className={styles.badgeTitle}>{title}</Text>
                </VStack>
              </Link>
            ))}
            {isJourneyCompleted && (
              <Link
                href={`/journey/SOEKIWe2g0JDOKTZBl6N`}
                key={"SOEKIWe2g0JDOKTZBl6N"}
              >
                <VStack className={styles.badgeContainer}>
                  <Image
                    alt="nft"
                    src="/sunspecialist.gif"
                    className={styles.badgeImage}
                  />
                  <Text className={styles.badgeTitle}>
                    {"Journey: Sun Specialist"}
                  </Text>
                </VStack>
              </Link>
            )}
          </SimpleGrid>
        </VStack>
      )}
    </VStack>
  );
}

export default Profile;
