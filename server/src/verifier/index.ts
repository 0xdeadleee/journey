import InputDecoder from "ethereum-input-data-decoder";
import honeyswap_abi from "../abi/honeyswap_abi.json";
import honeyfarm_abi from "../abi/honeyfarm_abi.json";

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
          if (new Date(transaction.timestamp).getTime() < startedAt)
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
          if (new Date(transaction.timestamp).getTime() < startedAt)
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
          if (new Date(transaction.timestamp).getTime() < startedAt)
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
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
      }
    case "3":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
      }
    case "4":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
      }
    case "5":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
      }
    case "6":
      switch (step) {
        case 0: {
          console.log("verified!");
          return true;
        }
        case 1: {
          console.log("verified!");
          return true;
        }
        case 2: {
          console.log("verified!");
          return true;
        }
      }
  }
  return false;
}
