const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'pink song seed ladder senior bar game oxygen chicken pilot sweet arrive',
  'https://rinkeby.infura.io/v3/bbbfbae98c6f4ff48c0c8384071ecbfb'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

      const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi, I am a contract!'] })
    .send({from: accounts[0] });


  console.log('Contract deployed to', result.options.address);
};

deploy().then(()=>{
	console.log("completed!");
	return;
}).catch((err)=>{
	console.log("Error:"+err);
	return;
})
	