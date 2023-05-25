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
    completed_users: [],
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
    completed_users: [],
    steps: {
      0: {
        amount: 100,
        description: "Swap at least 1 xDAI to ICE on IceCream Swap.",
        start_url: "https://icecreamswap.com/swap?chainId=50",
        title: "Swap your xDAI to ICE on IceCream Swap",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Stake your ICE on IceCream Swap and receive staking rewards.",
        start_url: "https://icecreamswap.com/pools?chainId=50",
        title: "Stake your ICE on IceCream Swap",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Show your love and support by following IceCream Swap on Twitter!",
        start_url: "https://twitter.com/icecream_swap",
        title: "Follow IceCream Swap on Twitter",
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
    completed_users: [],
    steps: {
      0: {
        amount: 100,
        description:
          "Bridge at least 1 xDAI into xDAI Network from any chain on IceCream.",
        start_url: "https://icecreamswap.com/bridge?chainId=56",
        title: "Bridge at least 1 xDAI into xDAI Network",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Show your love and support by following IceCream Swap on Twitter!",
        start_url: "https://twitter.com/icecream_swap",
        title: "Follow IceCream Swap on Twitter",
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
    completed_users: [],
    steps: {
      0: {
        amount: 100,
        description:
          "XD Sea is an open NFT marketplace on xDAI Network. Buy any NFT on XD Sea!",
        start_url: "https://www.xdsea.com/",
        title: "Buy an NFT on XD Sea",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Learn how to create your own unique NFT using the XD Sea NFT creator platform.",
        start_url: "https://www.xdsea.com/create-nft",
        title: "Mint your own NFT on XD Sea",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Show your love and support by following XD Sea on Twitter!",
        start_url: "https://twitter.com/XDSeaNFT",
        title: "Follow XD Sea on Twitter",
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
    completed_users: [],
    steps: {
      0: {
        amount: 100,
        description:
          "Create a new safe on Oryy to securely control your assets with multiple owners.",
        start_url: "https://app.oryy.io/welcome?chain=xdc",
        title: "Create a new safe on Oryy",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Show your love and support by following Fathom Finance on Twitter!",
        start_url: "https://twitter.com/fathom_fi",
        title: "Follow Fathom Finance on Twitter",
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
    completed_users: [],
    steps: {
      0: {
        amount: 100,
        description: "Swap at least 1 xDAI to ICE on IceCream Swap.",
        start_url: "https://icecreamswap.com/swap?chainId=50",
        title: "Swap your xDAI to ICE on IceCream Swap",
        isTwitter: false,
      },
      1: {
        amount: 100,
        description:
          "Supply any xDAI and ICE to the ICE-xDAI pool on IceCream Swap to earn fees when users swap in this pool.",
        start_url: "https://icecreamswap.com/liquidity?chainId=50",
        title: "Provide liquidity to the ICE-xDAI pool on IceCream Swap",
        isTwitter: false,
      },
      2: {
        amount: 100,
        description:
          "Boost your earnings from Step 2 by staking your ICE-xDAI LP tokens in the ICE-xDAI farm.",
        start_url: "https://icecreamswap.com/farms?chainId=50",
        title: "Stake your LP tokens in the ICE-xDAI Farm",
        isTwitter: false,
      },
      3: {
        amount: 100,
        description:
          "Show your love and support by following IceCream Swap on Twitter!",
        start_url: "https://twitter.com/icecream_swap",
        title: "Follow IceCream Swap on Twitter",
        isTwitter: true,
      },
    },
  },
];
