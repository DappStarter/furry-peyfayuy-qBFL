require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strike crawl tortoise slow just profit equal gaze'; 
let testAccounts = [
"0x9f8efc7649072fe568ae3867bd86078483745e74e105419b0acc73c5b83c9e70",
"0x8bf4a8278141e3218df0327f35fe5e1d7403b8d65005bbdbaa444ff5fb11b851",
"0x1c7e0fdc8698c7dfc0d7b9feec4e532f0fd461d87ef9c36c470622477dcf7993",
"0x49d891e72ba59f7270297ac3c98419fb837ca2edf6cdbb476334d3b01260cf4a",
"0xd438d7beb0c52bbb2a8ab017ff385624d2222e875fe2c11148b66725518a0597",
"0x30c781cb090138d021a0cd951ea3de4dd1b55348ad968c58ae1cce695c6ce0c9",
"0xb6f624875d2afd132e855ac9aeb350b614c37316accaa383b9fec74041d80b14",
"0xb7e57a7a5639797ec89df6c23329d81b6f0d97b4d2fabad508f88f6975ad629f",
"0x2c4beb47ee3fd13ead848ba7eef94b32c94f8bb32c7e96cc7ed2fd79a07d4568",
"0x81ee1aad3c65d74dfc8f09863de9035acbee10205349f0ed24408f997acd7ce7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

