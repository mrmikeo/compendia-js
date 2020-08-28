/** @module networks */

module.exports = {
  /** @type {Network} */
  compendia: {
    messagePrefix: '\x18Compendia Signed Message:\n',
    bip32: {
      public: 0x43587CF, // base58 
      private: 0x4358394 // base58Priv 
    },
    name: 'mainnet',
    nethash: '3fa86227bd6005262247f6288be55681f8a0bf751e91a9f81608d4c5926bf22f',
    token: 'Compendia',
    symbol: 'BIND',
    pubKeyHash: 0x58,
    explorer: 'https://bindscan.io',
    wif: 0xAB, // Network prefix for wif generation
    activePeer: {
    },
    peers: [
    ],
  }
}
