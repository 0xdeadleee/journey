import InputDecoder from "ethereum-input-data-decoder";
import honeyswap_abi from "../abi/honeyswap_abi.json";
import honeyfarm_abi from "../abi/honeyfarm_abi.json";
import agave_abi from "../abi/agave_abi.json";

export function verifyTransaction(
  questId: string,
  step: number,
  transaction: any,
  startedAt: number
): boolean {
  switch (questId) {
    case "1":
      switch (step) {
        case 0: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (
            transaction.to !== "0x6093aebac87d62b1a5a4ceec91204e35020e38be" ||
            transaction.to !== "0xe43e60736b1cb4a75ad25240e2f9a62bff65c0c0" ||
            transaction.to !== "0x1c232f01118cb8b424793ae03f870aa7d0ac7f77" ||
            transaction.to !== "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506"
          )
            return false;

          if (Number(transaction.value) < 1000000000000000000 - 1) return false;

          if (
            transaction.functionName !==
            "swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline)"
          )
            return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (transaction.to !== "0x1c232f01118cb8b424793ae03f870aa7d0ac7f77")
            return false;

          if (
            transaction.functionName !==
            "addLiquidityETH(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline)"
          )
            return false;

          const decoder = new InputDecoder(honeyswap_abi);
          const decodedData = decoder.decodeData(transaction.input);

          if (
            decodedData.inputs[0] !== "9C58BAcC331c9aa871AFD802DB6379a98e80CEdb"
          )
            return false;

          return true;
        }
        case 2: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (transaction.to !== "0xb44825cf0d8d4dd552f2434056c41582415aaaa1")
            return false;

          if (
            transaction.functionName !==
            "createDeposit(address _poolToken, uint256 _amount, uint256 _unlockTime, address _referrer)"
          )
            return false;

          const decoder = new InputDecoder(honeyfarm_abi);
          const decodedData = decoder.decodeData(transaction.input);

          if (
            decodedData.inputs[0] !== "321704900D52F44180068cAA73778d5cD60695A6"
          )
            return false;

          console.log("verified!");
          return true;
        }
      }
    case "2":
      switch (step) {
        case 0: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (transaction.to !== "0x36a644cc38ae257136eeca5919800f364d73fefc")
            return false;

          if (Number(transaction.value) < 1000000000000000000 - 1) return false;

          if (
            transaction.functionName !==
            "depositETH(address onBehalfOf, uint16 referralCode)"
          )
            return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (transaction.to !== "0x5e15d5e33d318dced84bfe3f4eace07909be6d9c")
            return false;

          if (
            transaction.functionName !==
            "borrow(address asset,uint256 amount,uint256 interestRateMode,uint16 referralCode,address onBehalfOf)"
          )
            return false;

          const decoder = new InputDecoder(agave_abi);
          const decodedData = decoder.decodeData(transaction.input);

          if (
            decodedData.inputs[0] !== "DDAfbb505ad214D7b80b1f830fcCc89B60fb7A83"
          )
            return false;

          console.log("verified!");
          return true;
        }
      }
    case "3":
      switch (step) {
        case 0: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (transaction.to !== "0x2f99472b727e15eecf9b9eff9f7481b85d3b4444")
            return false;

          if (transaction.methodId !== "0x7b4c837d") return false;

          console.log("verified!");
          return true;
        }
      }
    case "4":
      switch (step) {
        case 0: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (transaction.to !== "0x3fe6edfde83f46342b93127a498dfc43b5a64607")
            return false;

          if (transaction.methodId !== "0xfd453a85") return false;

          console.log("verified!");
          return true;
        }
      }
    case "5":
      switch (step) {
        case 0: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (
            transaction.contractAddress !==
            "0x22c1f6050e56d2876009903609a2cc3fef83b415"
          )
            return false;

          if (transaction.tokenName !== "POAP") return false;

          if (transaction.tokenSymbol !== "The Proof of Attendance Protocol")
            return false;

          console.log("verified!");
          return true;
        }
      }
    case "6":
      switch (step) {
        case 0: {
          if (new Date(transaction.timeStamp * 1000).getTime() < startedAt)
            return false;

          if (transaction.to !== "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2")
            return false;

          if (
            transaction.functionName !==
            "createProxyWithNonce(address _mastercopy, bytes initializer, uint256 saltNonce)"
          )
            return false;

          console.log("verified!");
          return true;
        }
      }
  }
  return false;
}
