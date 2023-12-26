import './App.css';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import Add from './pages/AddProduct';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

async function interactWithContract() {

	const address = "0xd9145CCE52D386f254917e481eB44e9943F39138";
	const abi = [
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_productID",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_productWeight",
					"type": "uint256"
				}
			],
			"name": "buyProduct",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_productID",
					"type": "uint256"
				}
			],
			"name": "delivery",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_description",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_weight",
					"type": "uint256"
				}
			],
			"name": "registerProduct",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getNum",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "products",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "productID",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "title",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "weight",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "address payable",
					"name": "seller",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "buyer",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "delivered",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
	const contract = new web3.eth.Contract(abi, address);

	const bal = await contract.methods.getNum().call();
  console.log(bal);
}

function App() {
  
  return (
    <div className=''>
      <Navbar />
      {/* <Home /> */}
      {/* <ProductPage /> */}
      <AddProduct />
    </div>
  );
}

export default App;
