require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('./hardhat-storage-layout');
require(`hardhat-abi-exporter`)

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.5.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": ["storageLayout"],
            },
          },
        },
      },
    ]
  },
  networks: {
    testnet: {
      url: "https://moonbeam-alpha.api.onfinality.io/public",
      chainId: 1287,
      accounts: [process.env.PK],
      gas: 12995000
    },
    moonriver: {
      url: "https://rpc.moonriver.moonbeam.network",
      chainId: 1285,
      accounts: [process.env.PK],
    },
    moonbeam: {
      url: "https://rpc.api.moonbeam.network",
      chainId: 1284,
      accounts: [process.env.PK],
    },
  },
  abiExporter: {
    path: './deploy-artifacts/abis',
    runOnCompile: true,
    clear: true,
  },
  etherscan: {
    apiKey: {
      moonbaseAlpha: process.env.MOONSCAN_API_KEY,
      moonriver: process.env.MOONSCAN_API_KEY,
      // moonbeam: process.env.MOONSCAN_API_KEY,
    }
  }
};
