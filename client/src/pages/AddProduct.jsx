
import Web3 from 'web3';

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

const AddProduct = () => {

  async function interactWithContract() 
  {
	  const bal = await contract.methods.getNum().call();
    console.log(bal);
  }

  return (
    <section class='py-12 sm:py-16'>
      <div class='container mx-auto px-4'>
        {/* <nav class='flex'>
          <ol role='list' class='flex items-center'>
            <li class='text-left'>
              <div class='-m-1'>
                <a
                  href='#'
                  class='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'
                >
                  {' '}
                  Home{' '}
                </a>
              </div>
            </li>

            <li class='text-left'>
              <div class='flex items-center'>
                <span class='mx-2 text-gray-400'>/</span>
                <div class='-m-1'>
                  <a
                    href='#'
                    class='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'
                  >
                    {' '}
                    Products{' '}
                  </a>
                </div>
              </div>
            </li>

            <li class='text-left'>
              <div class='flex items-center'>
                <span class='mx-2 text-gray-400'>/</span>
                <div class='-m-1'>
                  <a
                    href='#'
                    class='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'
                    aria-current='page'
                  >
                    {' '}
                    Coffee{' '}
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </nav> */}

        <div class='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16'>
          <div class='lg:col-span-3 lg:row-end-1'>
            <div class='lg:flex lg:items-start'>
              <div class='lg:order-2 lg:ml-5'>
                <div class='max-w-xl overflow-hidden rounded-lg'>
                  <img
                    class='h-full w-full max-w-full object-cover'
                    src='/images/coffee.jpg'
                    alt=''
                  />
                </div>
              </div>

              <div class='mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0'>
                <div class='flex flex-row items-start lg:flex-col'>
                  <button
                    type='button'
                    class='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center'
                  >
                    <img
                      class='h-full w-full object-cover'
                      src='/images/coffee.jpg'
                      alt=''
                    />
                  </button>
                  <button
                    type='button'
                    class='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center'
                  >
                    <img
                      class='h-full w-full object-cover'
                      src='/images/coffee.jpg'
                      alt=''
                    />
                  </button>
                  <button
                    type='button'
                    class='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center'
                  >
                    <img
                      class='h-full w-full object-cover'
                      src='/images/coffee.jpg'
                      alt=''
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
            <h1 class='sm: text-2xl font-bold text-gray-900 sm:text-3xl'>
              Turkish Coffee
            </h1>

            <div class='relative mt-4'>
              <input
                type='number'
                id='Weight'
                class='peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0'
                placeholder=' '
              />
              <label
                for='Weight'
                class='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600'
              >
                {' '}
                Weight{' '}
              </label>
              <div class='absolute right-1 top-1/2 -translate-y-1/2 bg-white py-1 px-1 text-gray-300 peer-placeholder-shown:text-white peer-focus:text-gray-300'>
                kg
              </div>
            </div>
            <a
              href='#'
              class='mt-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700'
            >
              {' '}
              Get started{' '}
            </a>
          </div>

          <div class='lg:col-span-3'>
            <div class='border-b border-gray-300'>
              <nav class='flex gap-4'>
                <a
                  href='#'
                  title=''
                  class='border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800'
                >
                  {' '}
                  Description{' '}
                </a>
              </nav>
            </div>

            <div class='mt-8 flow-root sm:mt-12'>
              <h1 class='text-3xl font-bold'>Delivered To Your Door</h1>
              <p class='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                accusantium nesciunt fuga.
              </p>
              <h1 class='mt-8 text-3xl font-bold'>
                From the Fine Farms of Brazil
              </h1>
              <p class='mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                numquam enim facere.
              </p>
              <p class='mt-4'>
                Amet consectetur adipisicing elit. Optio numquam enim facere.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                rerum nostrum eius facere, ad neque.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        href='#'
        onClick={interactWithContract}
        class='mt-2 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700'
      >
        {' '}
        Get started{' '}
      </a> */}
    </section>
  );
};

export default AddProduct;
