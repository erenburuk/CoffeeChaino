import Web3 from 'web3';
import React, { useState } from 'react';
import axios from 'axios';

const web3 = new Web3(Web3.givenProvider);

const address = '0x168b3D883e5C5E97707A8677072Eb3ec2F21Ab61';
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
				"name": "_weight",
				"type": "uint256"
			}
		],
		"name": "addWeight",
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
			},
			{
				"internalType": "string",
				"name": "_ipfsHash",
				"type": "string"
			}
		],
		"name": "registerProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(abi, address);

const AddWeight = ({ productID, onClose }) => {
    const [weight, setWeight] = useState(0);

  const registerProduct = async () => {
    onClose();  
    const accounts = await web3.eth.requestAccounts();
    const account = accounts[0];

    const result = await contract.methods
      .addWeight(productID, weight)
      .send({ from: account });
  };

  return (
    <div class='relative m-10 max-w-lg  border text-gray-800 shadow-lg bg-white'>
      <div class='flex flex-row gap-1 mt-7 mb-4 pl-4 text-2xl font-normal text-green-500'>
        <svg
          width='32px'
          height='32px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M9.06854 4.95331C9.11355 4.2452 8.40337 3.75898 7.85133 4.20473C5.53866 6.07211 4.43027 9.93002 5.46436 13.7893C6.56631 17.9018 9.74458 20.6867 12.867 20.8262C13.3993 20.85 13.7874 20.3471 13.8687 19.8206C13.9309 19.4177 14.0266 19.0103 14.0708 18.6494C14.2422 17.2498 13.8891 15.8432 13.0771 14.6912L10.2394 10.665C9.32756 9.37129 8.88688 7.81131 8.98724 6.23237L9.06854 4.95331ZM15.5049 20.5061C15.5204 20.5802 15.5984 20.5734 15.667 20.5413C18.6898 19.1285 19.6338 14.7423 18.4464 10.3108C17.3833 6.34333 14.8007 3.61212 11.8894 3.29868C11.265 3.23146 10.8124 3.91115 10.7644 4.53725C10.7108 5.23582 10.5427 5.99084 10.5085 6.52896C10.4264 7.82082 10.7869 9.09717 11.533 10.1557L14.3707 14.1818C15.3631 15.5898 15.7947 17.309 15.5852 19.0197C15.4665 19.989 15.4751 20.3635 15.5049 20.5061Z'
            fill='#fff'
            stroke='#40c057'
          />
        </svg>
        <p>Add New Product</p>
      </div>
      <hr class='mb-2 border-t border-gray-600-500 mx-auto' />
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
      <div class='flex flex-col items-center px-8 pb-10'>


        <label class='mt-4 block w-full' for='name'>
          <p class='mb-1 text-sm text-gray-600'>Weight</p>
          <input
            class='w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1'
            type='number'
            min='0'
            step='10'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id='weight'
          />
        </label>

        <div class='mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0'>
          <button 
            onClick={registerProduct}
            class='inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-green-400 focus:ring sm:w-auto'
          >
            Add
            
          </button>
          <a
            onClick={onClose}
            class='cursor-pointer inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-green-500 px-4 font-semibold text-green-600 transition-colors duration-200 hover:border-y-green-400 hover:text-green-400 sm:w-auto'
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddWeight;
