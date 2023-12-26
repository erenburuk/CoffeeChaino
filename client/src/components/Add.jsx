import Web3 from 'web3';
import React, { useState, useEffect } from 'react';
const web3 = new Web3(Web3.givenProvider);

const address = "0x2c7633aEF97906B2daB0f1cAe838E043DEa4ECD3";
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productID",
				"type": "uint256"
			}
		],
		"name": "getProduct",
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
	}
];
const contract = new web3.eth.Contract(abi, address);

const Add = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);

  const registerProduct = async () => {
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];

    const priceInWei = web3.utils.toWei(price.toString(), 'ether');

    const result = await contract.methods.registerProduct(title, description, priceInWei, weight).send({from: account,});
    console.log(result);

};


  return (
    <div class='relative m-10 max-w-lg rounded-md border text-gray-800 shadow-lg bg-white'>
      <p class='mt-4 pl-4 text-xl font-bold'>Add new product</p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-400'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        stroke-width='2'
        onClick={onClose}
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
      <div class='flex flex-col items-center px-8 py-10'>

        <label class='block w-full' for='name'>
          <p class='mb-1 text-sm text-gray-600'>Coffee Name</p>
          <input
            class='w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1'
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter name'
          />
        </label>

        <label class='mt-4 block w-full' for='name'>
          <p class='mb-1 text-sm text-gray-600'>Weight</p>
          <input
            class='w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1'
            type='number'
            min = '0'
            step = '10'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id='weight'
          />
        </label>

        <label class='mt-4 block w-full' for='name'>
          <p class='mb-1 text-sm text-gray-600'>Description</p>
          <input
            class='w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1'
            type='text'
            placeholder='Enter description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label class='mt-4 block w-full' for='name'>
          <p class='mb-1 text-sm text-gray-600'>Price</p>
          <input
            class='w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1'
            type='number'
            min = '0'
            max = '1'
            step = '0.1'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>


        <div class='mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0'>
          <button onClick={registerProduct} class='whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white'>
            Add
          </button>
          <button class='whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
