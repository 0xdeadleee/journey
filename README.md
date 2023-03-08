# Journey

Journey is a Fantom-native quests platform built to onboard the next billion users into crypto through the Fantom blockchain. This project was built specifically for the Fantom Q1 Hackathon.

- Check out the [Live Deployment](https://tryjourney.xyz)
- Check out the [Walkthrough Demo](https://vimeo.com/805770352)

![](app/public/landing.png)

## Problem Statement

One of the largest barriers to entry that newcomers face to decentralized finance is not knowing where to start their journey on-chain. We all have that friend who might own some crypto on a centralized exchange or read a few articles about yield farming or automated market makers, but all know too well that very few have actually gotten any hands-on experience engaging with on-chain protocols.

What if there’s a platform that helps onboard new crypto users by rewarding them for engaging in on-chain activities with protocols in a sustainable manner that both benefits the users and the protocols themselves?

## Solution: Journey

This is why we’ve built Journey. Journey is an on-chain quests platform built for the Fantom blockchain where users can engage in on-chain tasks called “quests” and be rewarded for doing so in token rewards, NFT completion badges, and experience points on the platform.

Our business model is that we partner with protocols in the Fantom ecosystem who will fund and launch quests on our platform and help incentivize user engagement on their protocols (where we take a small fee for offering the service). By doing so not only do projects benefit from increase in engagement on their protocols, but this gamified learn-to-earn platform will help user seamlessly onboard into web3 - increasing the overall user base of the Fantom ecosystem.
`
We believe Journey will help: (1) onboard new users into web3, (2) increase user engagement during current market conditions from existing users, (3) help educate anyone about the Fantom ecosystem through hands-on on-chain experiences.


## How we built it
The main app was built with NextJS, Chakra UI, Express, Firebase, IPFS (Web3.Storage) and RainbowKit (wallet aggregator).

### Verification Service
We built a server that uses the Fantom Scan API to verify Journey's user transactions for quest completion by using the unique method hash of the on-chain transaction performed on a particular protocol contract.

### Rewards Payout
In order to programmatically distribute rewards to quest completed users, we built an API that utilizes a custom built ERC721 NFT contract to mint NFT badges and send tokens to the users.

### NFT Badges (Stable Diffusion)
We used Stable Diffusion in order to create the generative artwork used in the NFT completion badges distributed to users who completed the on-chain quests.

### Next Steps

This was a proof of concept built in the span of a month. But we are interested in continuing to pursue this project. Our next steps are as follows:

- Implement a user verification system via BrightID or WorldCoin to prevent sybil resistance on quests that offer limited token rewards from partners
- Find a launch partner protocol from the Fantom ecosystem to help beta test the service on Fantom mainnet
- Add more gamification and social features to increase engagement and stickiness in the platform
- Build a partner onboarding service to streamline the quest launch flow
- Better responsive UI support
- Testing and monitoring of service

We're really excited to see a future where all new applications launching on the Fantom blockchain issue their own quests on Journey in order to increase engagement on their platform and educate users about what value their protocols offer.