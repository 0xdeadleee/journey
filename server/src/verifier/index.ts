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
          // if (new Date(transaction.timestamp).getTime() < startedAt)
          //   return false;

          // if (transaction.to !== "xdcf9c5e4f6e627201ab2d6fb6391239738cf4bdcf9")
          //   return false;

          // if (Number(transaction.value) < 1000000000000000000 - 0.01)
          //   return false;

          // if (transaction.input.slice(0, 10) !== "0x7ff36ab5") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          // if (new Date(transaction.timestamp).getTime() < startedAt)
          //   return false;

          // if (transaction.to !== "xdcf9c5e4f6e627201ab2d6fb6391239738cf4bdcf9")
          //   return false;

          // if (transaction.input.slice(0, 10) !== "0xf305d719") return false;

          console.log("verified!");
          return true;
        }
        case 2: {
          // if (new Date(transaction.timestamp).getTime() < startedAt)
          //   return false;

          // if (transaction.to !== "xdc23afa182d705ef41892842e542fa137312e3c6db")
          //   return false;

          // if (transaction.input.slice(0, 10) !== "0xe2bbb158") return false;

          console.log("verified!");
          return true;
        }
      }
    case "2":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdcbb5e1777a331ed93e07cf043363e48d320eb96c4")
            return false;

          if (Number(transaction.value) < 1000000000000000000 - 0.01)
            return false;

          if (transaction.input.slice(0, 10) !== "0x7ff36ab5") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdc7b7387513444d4336e5a7e9cf75a2bc7a38721a9")
            return false;

          if (transaction.input.slice(0, 10) !== "0xb6b55f25") return false;

          console.log("verified!");
          return true;
        }
      }
    case "3":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdcbb5e1777a331ed93e07cf043363e48d320eb96c4")
            return false;

          if (Number(transaction.value) < 1000000000000000000 - 0.01)
            return false;

          if (transaction.input.slice(0, 10) !== "0x7ff36ab5") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdc40375c92d9faf44d2f9db9bd9ba41a3317a2404f")
            return false;

          if (transaction.input.slice(0, 10) !== "0x05e2ca17") return false;

          console.log("verified!");
          return true;
        }
      }
    case "4":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdcfc8fd5c4cfe35b0ad7f1b02c851968e42f85e45a")
            return false;

          if (transaction.input.slice(0, 10) !== "0xc23b139e") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdc85d216d87c993c250a7725af8f6c161d0504c32b")
            return false;

          console.log("hi");

          if (transaction.input.slice(0, 10) !== "0x45576f94") return false;

          console.log("verified!");
          return true;
        }
      }
    case "5":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdca6b71e26c5e0845f74c812102ca7114b6a896ab2")
            return false;

          if (transaction.input.slice(0, 10) !== "0x1688f0b9") return false;

          console.log("verified!");
          return true;
        }
      }
    case "6":
      switch (step) {
        case 0: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdcbb5e1777a331ed93e07cf043363e48d320eb96c4")
            return false;

          if (Number(transaction.value) < 1000000000000000000 - 0.01)
            return false;

          if (transaction.input.slice(0, 10) !== "0x7ff36ab5") return false;

          console.log("verified!");
          return true;
        }
        case 1: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdcbb5e1777a331ed93e07cf043363e48d320eb96c4")
            return false;

          if (transaction.input.slice(0, 10) !== "0xf305d719") return false;

          console.log("verified!");
          return true;
        }
        case 2: {
          if (new Date(transaction.timestamp).getTime() < startedAt)
            return false;

          if (transaction.to !== "xdcdd156ca7bff002f7827bdffd38a0651cfbbe400e")
            return false;

          if (transaction.input.slice(0, 10) !== "0xe2bbb158") return false;

          console.log("verified!");
          return true;
        }
      }
  }
  return false;
}
