const JOURNEY_API_URL =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? process.env.NEXT_PUBLIC_API_PROD
    : process.env.NEXT_PUBLIC_API_DEV;

async function fetchUser(address: string) {
  if (!address) return;
  try {
    const response = await fetch(`${JOURNEY_API_URL}/api/users/${address}`);
    if (response.status === 200) {
      const user = await response.json();
      return user;
    }
  } catch (err) {
    console.log(err);
  }
}

async function createUser(address: string) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: address,
      }),
    };
    await fetch(`${JOURNEY_API_URL}/api/users/new`, requestOptions);
  } catch (err) {
    console.log(err);
  }
}

export async function onboardUser(address) {
  try {
    const fetchedUser = await fetchUser(address);
    if (!fetchedUser) await createUser(address);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
