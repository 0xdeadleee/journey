export type Quest = {
  title: string;
  description: string;
  image_url: string;
  nft_reward: any;
  token_reward: any;
  partner: any;
  xp: number;
  id: string;
  isJourney: boolean;
  order: number;
  completed_users: any[];
  steps?: any;
};

export const mockQuests: Quest[] = [
  {
    title: "DEX 101 with HoneySwap",
    description: "Learn swapping, LPing, farming with HoneySwap",
    image_url: "/sd_honeyswap.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_honeyswap.jpg",
      preview_url: "/sd_honeyswap.jpg",
      title: "DEX 101 with HoneySwap",
      token_uri:
        "https://bafybeigva44cr3hx5nvqvlmhwq2rblpfbeenczsyysp7l5og6fpslfzkey.ipfs.w3s.link/1.json",
    },
    token_reward: {
      amount: "0.01",
      fiat_amount: "10",
      symbol: "xDAI",
    },
    xp: 400,
    id: "1",
    partner: {
      image_url: "/honeyswap.jpg",
    },
    order: 1,
    completed_users: ["1", "2", "3"],
    steps: {
      0: {
        amount: 100,
        description: "Swap at least 1 xDAI to GNO on HoneySwap.",
        start_url: "https://app.honeyswap.org/#/swap",
        title: "Swap your xDAI to GNO on HoneySwap",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Supply any xDAI and GNO to the GNO-xDAI pool on HoneySwap to earn fees when users swap in this pool.",
        start_url: "https://app.honeyswap.org/#/pool",
        title: "Provide liquidity to the GNO-xDAI pool",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Boost your earnings from Step 2 by staking your XSP-xDAI LP tokens in the XSP-xDAI farm.",
        start_url: "https://1hive.io/#/farm",
        title: "Stake your LP tokens in the GNO-wxDAI Farm",
        isTwitter: false,
      },
      3: {
        amount: 100,
        description:
          "Show your love and support by following HoneySwap on Twitter!",
        start_url: "https://twitter.com/Honeyswap",
        title: "Follow HoneySwap on Twitter",
        partner_id: "1310159840652779520",
        isTwitter: true,
      },
    },
  },
  {
    title: "Lending 101 with Agave",
    description: "Learn how DeFi Lending works with Agave",
    image_url: "/2.png",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_agave.jpg",
      preview_url: "/sd_agave.jpg",
      title: "Staking with IceCream",
      token_uri:
        "https://bafybeifb5boxu2loicbldk256mt5exhl6oyrd6vwi5xhxvqevzd6xmqor4.ipfs.w3s.link/2.json",
    },
    token_reward: {
      amount: "0.01",
      fiat_amount: "10",
      symbol: "xDAI",
    },
    xp: 400,
    id: "2",
    partner: {
      image_url: "/agave.jpg",
    },
    order: 2,
    completed_users: ["1", "2"],
    steps: {
      0: {
        amount: 100,
        description:
          "Deposit at least 1 xDAI into Agave Finance to use as collateral for borrowing.",
        start_url: "https://app.agave.finance/#/deposit/XDAI",
        title: "Deposit at least 1 xDAI to earn yield",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Borrow USDC against your deposited xDAI as collateral from Step 1.",
        start_url: "https://app.agave.finance/#/borrow/USDC",
        title: "Borrow USDC against your xDAI collateral",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Show your love and support by following Agave Finance on Twitter!",
        start_url: "https://twitter.com/Agave_lending",
        partner_id: "1364989021340983300",
        title: "Follow Agave Finance on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "Liquid Staking with Stakewise",
    description: "Learn the basics of liquid staking on Stakewise",
    image_url: "/3.png",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_stakewise.jpg",
      preview_url: "/sd_stakewise.jpg",
      title: "Liquid Staking with Stakewise",
      token_uri:
        "https://bafybeibnth5wdqa2jn26vuljn5eouu3dsp6ineurs3cjkyslgpgsjok67a.ipfs.w3s.link/3.json",
    },
    token_reward: {
      amount: "0.01",
      fiat_amount: "10",
      symbol: "xDAI",
    },
    xp: 400,
    id: "3",
    partner: {
      image_url: "/stakewise.png",
    },
    order: 3,
    completed_users: ["1", "2"],
    steps: {
      0: {
        amount: 100,
        description:
          "Stake any amount of GNO on Stakewise and receive staking rewards with sGNO.",
        start_url: "https://app.stakewise.io/",
        title: "Stake your GNO on Stakewise",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Show your love and support by following Stakewise on Twitter!",
        start_url: "https://twitter.com/stakewise_io",
        title: "Follow Stakewise on Twitter",
        partner_id: "1163782803298951170",
        isTwitter: true,
      },
    },
  },
  {
    title: "NFT 101 on Unique One",
    description: "Learn how to buy your first collectible on xDAI",
    image_url: "/4.png",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_uniqueone.jpg",
      preview_url: "/sd_uniqueone.jpg",
      title: "NFT 101 on Unique One",
      token_uri:
        "https://bafybeih275ktr6jznpnjqy7ckpkdb4antqqcmiubryszoqmj2wfo5nuzoi.ipfs.w3s.link/4.json",
    },
    token_reward: {
      amount: "0.01",
      fiat_amount: "10",
      symbol: "xDAI",
    },
    xp: 400,
    id: "4",
    partner: {
      image_url: "/unique.jpg",
    },
    order: 4,
    completed_users: ["1"],
    steps: {
      0: {
        amount: 100,
        description:
          "Unique One is an open NFT marketplace on Gnosis Chain. Buy any NFT on Unique One!",
        start_url: "https://xdai.unique.one/",
        title: "Buy an NFT on Unique One",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Show your love and support by following Unique One on Twitter!",
        start_url: "https://twitter.com/UniqueOne_UO",
        partner_id: "1316749243655155712",
        title: "Follow Unique One on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "Claim your first POAP",
    description: "Learn how to claim your first POAP on Gnosis",
    image_url: "/5.png",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_poap.jpg",
      preview_url: "/sd_poap.jpg",
      title: "Multi-Sig on Oryy",
      token_uri:
        "https://bafybeiffqsxrmyrxfj66522qeehlp2bkc33fzvmd6lqjw4uo4spbclkqyy.ipfs.w3s.link/5.json",
    },
    token_reward: {
      amount: "0.01",
      fiat_amount: "10",
      symbol: "xDAI",
    },
    xp: 400,
    id: "5",
    partner: {
      image_url: "/poap.jpg",
    },
    order: 6,
    completed_users: ["1"],
    steps: {
      0: {
        amount: 100,
        description:
          "Claim a Proof of Attendance Token on Gnosis Chain by attending any event!",
        start_url: "https://poap.xyz/",
        title: "Claim a POAP on Gnosis Chain",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: "Show your love and support by following POAP on Twitter!",
        start_url: "https://twitter.com/poapxyz",
        partner_id: "1096560334880399361",
        title: "Follow POAP on Twitter",
        isTwitter: true,
      },
    },
  },
  {
    title: "Multi-Sig 101 with Safe",
    description: "Learn how to create a multi-sig wallet on Safe",
    image_url: "/sd_safe.jpg",
    isJourney: false,
    nft_reward: {
      description: "Exclusive NFT for quest completion",
      image_url: "/sd_safe.jpg",
      preview_url: "/sd_safe.jpg",
      title: "Multi-Sig on Safe",
      token_uri:
        "https://bafybeihrpczas5wdtpnccsty56fui44gpctcy5qg5akhtlglksxivrn5d4.ipfs.w3s.link/6.json",
    },
    token_reward: {
      amount: "0.01",
      fiat_amount: "10",
      symbol: "xDAI",
    },
    xp: 400,
    id: "6",
    partner: {
      image_url: "/safe.jpg",
    },
    order: 5,
    completed_users: ["1", "2", "3"],
    steps: {
      0: {
        amount: 100,
        description:
          "Create a new safe on Safe to securely control your assets with multiple owners.",
        start_url: "https://app.safe.global/welcome",
        title: "Create a new safe on Safe",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description: "Show your love and support by following Safe on Twitter!",
        start_url: "https://twitter.com/safe",
        partner_id: "8467082",
        title: "Follow Safe on Twitter",
        isTwitter: true,
      },
    },
  },
];
