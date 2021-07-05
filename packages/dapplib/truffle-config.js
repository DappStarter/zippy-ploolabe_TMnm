require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture strike curtain sad unique gesture basket equal gas'; 
let testAccounts = [
"0x7b1635e53bec62822bcbd17f02a61147417e675d0ba4225b74f8a0281567a919",
"0x0491867c7d895e14193adc48e4a689a6228d20971f714cba14e85c70688ad6a9",
"0x86c8ec8d693bd4c729b18b039239e0631b0e772181aa0ee8e8b7cab26765b288",
"0x167ee7b5c88bcbd506fe18bffadc26a1ce1ad57d91d12e89674a34f8b1bebb61",
"0xf66cd0efda328095937774924c2c433735122c8dde2b22252da61d2ea0fc4960",
"0xbca48c7e062e14931582025637bbf1a3e3a68a92cf6179785cd6820eb38be007",
"0x9ff6bb85c6f4fd9cbb278cadd03bb73183ab959963b40dd9aa9457638fdf0ced",
"0xdff9a501e15f38e3c56c0888237a2829c34bbd973ffe6b4a5fd6b770e14c5682",
"0x5f9843e15f7dc32d5d0029c1df1888399ebe0fbb1bc3ea0634df0a5182365313",
"0x3dcc292d9776d949b941249141ab6f7f8386db314c717707633ade5a62b10965"
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

