import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);


const address = "0x629eCF5ec1Ad8A66061E7881c524cE36908b16Ce";
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
				"name": "_data",
				"type": "string"
			}
		],
		"name": "getHash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
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
		"inputs": [],
		"name": "getProductLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
	}
];
const contract = new web3.eth.Contract(abi, address);

console.log("web3" + web3); 
console.log("contract"+ contract);

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productCount = await contract.methods.getProductLength().call();
        const fetchedProducts = [];        
        for (let i = 0; i <= productCount; i++) {
          const product = await contract.methods.products(i).call();
          fetchedProducts.push(product);
        }
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section class='bg-white py-12 text-gray-700 sm:py-16 lg:py-20'>
        <div class='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div class='mx-auto max-w-md text-center'>
            <h2 class='font-serif text-2xl font-bold sm:text-3xl'>
              Coffee Stocks
            </h2>
          </div>

          <div class='mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16'>

          {products.map((item) => console.log("item:"+item))}

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
