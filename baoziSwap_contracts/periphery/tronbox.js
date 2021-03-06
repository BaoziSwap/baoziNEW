const port = process.env.HOST_PORT || 9090

require('dotenv').config();
const {
  PRIVATE_KEY_SHASTA,
  PRIVATE_KEY_MAINNET
} = process.env;


module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey: PRIVATE_KEY_MAINNET,
      /*
Create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

*/
      userFeePercentage: 50,
      consume_user_resource_percent: 50,
      feeLimit: 5e9,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: PRIVATE_KEY_SHASTA,
      userFeePercentage: 100,
      consume_user_resource_percent: 100,
      feeLimit: 5e9,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE,
      userFeePercentage: 100,
      consume_user_resource_percent: 100,
      feeLimit: 5e9,
      originEnergyLimit: 1e7,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
      userFeePercentage: 0,
      feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.8.6',
      }
    },

  },
  solc: {
    optimizer: {
        enabled: true,
        runs: 1
    }
}
}
