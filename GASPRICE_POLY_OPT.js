const Web3 = require("web3");


async function main() {
	
	const web3_poly = new Web3('https://rpc.ankr.com/polygon');
	const web3_opt = new Web3('https://rpc.ankr.com/optimism');
	const web3_arb = new Web3('https://rpc.ankr.com/arbitrum');
	
	//while(1) {
	
		//newBlockEvent_poly.on('data', async function(blockHeader){
			console.log('\x1b[31m%s\x1b[0m',"\n*----------------------------------------------*");
			console.log('\x1b[32m%s\x1b[0m'," POLYGON GasPrice :");	
			await web3_poly.eth.getGasPrice().then((result)=>{console.log(" "+web3_poly.utils.fromWei(result,'gwei')+" Gwei")});
			console.log('\x1b[31m%s\x1b[0m',"*----------------------------------------------*");
		//});
		
		//const newBlockEvent_opt = web3_opt.eth.subscribe('newBlockHeaders');

		//newBlockEvent_opt.on('data', async function(blockHeader){
			console.log('\x1b[31m%s\x1b[0m',"\n*----------------------------------------------*");
			console.log('\x1b[32m%s\x1b[0m'," OPTIMISM GasPrice :");	
			await web3_opt.eth.getGasPrice().then((result)=>{console.log(" "+web3_opt.utils.fromWei(result,'gwei')+" Gwei")});
			console.log('\x1b[31m%s\x1b[0m',"*----------------------------------------------*");
		//});
			
		//const newBlockEvent_arb = web3_arb.eth.subscribe('newBlockHeaders');

		//newBlockEvent_arb.on('data', async function(blockHeader){
			console.log('\x1b[31m%s\x1b[0m',"\n*----------------------------------------------*");
			console.log('\x1b[32m%s\x1b[0m'," ARBITRUM GasPrice :");	
			await web3_arb.eth.getGasPrice().then((result)=>{console.log(" "+web3_arb.utils.fromWei(result,'gwei')+" Gwei")});
			console.log('\x1b[31m%s\x1b[0m',"*----------------------------------------------*");
		//});
		console.log("================================================================>");
		//sleep(5000);
	//}

}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

main();