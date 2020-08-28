/** @module networks */

module.exports = {
  /** @type {Network} */
  compendia: {
    messagePrefix: '\x18Compendia Signed Message:\n',
    bip32: {
      public: 70617039, // base58 will have a prefix 'qpub'
      private: 70615956 // base58Priv will have a prefix 'apriv'
    },
    name: 'mainnet',
    nethash: '3fa86227bd6005262247f6288be55681f8a0bf751e91a9f81608d4c5926bf22f',
    token: 'Compendia',
    symbol: 'BIND',
    pubKeyHash: 88,
    explorer: 'https://bindscan.io',
    wif: 171, // Network prefix for wif generation
    activePeer: {
    },
    peers: [
    ],
  }
}
