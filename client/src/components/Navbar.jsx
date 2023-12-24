import React, { useState } from 'react';
import Add from './Add';

const Navbar = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  const closeAddModal = () => {
    setAddModalVisible(false);
  };

  return (
    <header class='relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-slate-700 md:mx-auto md:flex-row md:items-center'>
      <a
        href='#'
        class='flex cursor-pointer items-center whitespace-nowrap text-2xl font-black'
      >
        <span class='mr-2 text-4xl text-green-500'>
          <svg
            role='img'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.84692 4.24946C4.84692 3.00712 5.85404 2 7.09638 2H16.9478C18.1902 2 19.1973 3.00712 19.1973 4.24946C19.1973 4.34404 19.1893 4.43677 19.174 4.52701C19.9071 4.80721 20.4277 5.51716 20.4277 6.3487C20.4277 7.20744 19.8725 7.9365 19.1015 8.1965L17.3844 18.7137C17.3104 19.1672 17.2481 19.5485 17.1729 19.8594C17.0939 20.1856 16.9892 20.4874 16.8039 20.7675C16.5169 21.2012 16.1128 21.5446 15.6385 21.758C15.3323 21.8957 15.0175 21.9505 14.6828 21.9759C14.3639 22 13.9776 22 13.5179 22H10.4803C10.0207 22 9.63435 22 9.31539 21.9759C8.98069 21.9505 8.66597 21.8957 8.3597 21.758C7.88541 21.5446 7.48133 21.2012 7.19436 20.7675C7.00905 20.4874 6.90429 20.1856 6.82533 19.8594C6.75009 19.5485 6.68786 19.1672 6.61381 18.7136L4.8966 8.19552C4.12707 7.93468 3.57324 7.20637 3.57324 6.3487C3.57324 5.50182 4.11323 4.78105 4.86769 4.51194C4.85402 4.42646 4.84692 4.33879 4.84692 4.24946ZM6.4966 4.39913H17.5476C17.6303 4.39913 17.6973 4.33212 17.6973 4.24946C17.6973 3.83554 17.3617 3.5 16.9478 3.5H7.09638C6.68247 3.5 6.34692 3.83554 6.34692 4.24946C6.34692 4.33212 6.41394 4.39913 6.4966 4.39913ZM5.52281 5.89913C5.27452 5.89913 5.07324 6.10041 5.07324 6.3487C5.07324 6.59699 5.27452 6.79827 5.52281 6.79827H18.4781C18.7264 6.79827 18.9277 6.59699 18.9277 6.3487C18.9277 6.10041 18.7264 5.89913 18.4781 5.89913H5.52281ZM6.43323 8.29827L8.08978 18.4448C8.16943 18.9326 8.22296 19.2574 8.28325 19.5065C8.34132 19.7465 8.39385 19.862 8.44532 19.9398C8.57576 20.1369 8.75943 20.293 8.97502 20.39C9.06009 20.4282 9.18254 20.4615 9.4287 20.4801C9.68426 20.4995 10.0134 20.5 10.5078 20.5H13.4905C13.9848 20.5 14.314 20.4995 14.5695 20.4801C14.8157 20.4615 14.9381 20.4282 15.0232 20.39C15.2388 20.293 15.4225 20.1369 15.5529 19.9398C15.6044 19.862 15.6569 19.7465 15.715 19.5065C15.7753 19.2574 15.8288 18.9326 15.9084 18.4448L17.565 8.29827H6.43323ZM12.001 13.4697C11.7085 13.4697 11.4715 13.7068 11.4715 13.9993C11.4715 14.2917 11.7085 14.5288 12.001 14.5288C12.2935 14.5288 12.5305 14.2917 12.5305 13.9993C12.5305 13.7068 12.2935 13.4697 12.001 13.4697ZM9.97146 13.9993C9.97146 12.8784 10.8801 11.9697 12.001 11.9697C13.1219 11.9697 14.0305 12.8784 14.0305 13.9993C14.0305 15.1202 13.1219 16.0288 12.001 16.0288C10.8801 16.0288 9.97146 15.1202 9.97146 13.9993Z'
              fill='black'
            />
          </svg>
        </span>
        CoffeeChaino
      </a>
      <input type='checkbox' class='peer hidden' id='navbar-open' />
      <label
        class='absolute top-5 right-7 cursor-pointer md:hidden'
        for='navbar-open'
      >
        <span class='sr-only'>Toggle Navigation</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </label>
      <nav
        aria-label='Header Navigation'
        class='flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start'
      >
        <ul class='flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0'>
          <li class='font-bold md:mr-12'>
            <a href='#'>Stock</a>
          </li>
          <li class='md:mr-12'>
            <a href='#' onClick={openAddModal}>
              Add
            </a>
          </li>
          {isAddModalVisible && (
            <div class='fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center'>
              <Add onClose={closeAddModal} />
            </div>
          )}
          <li class='md:mr-12'>
            <a href='#'>Support</a>
          </li>
          <li class='md:mr-12'>
            <button class='rounded-full border-2 border-green-500 px-6 py-1 text-green-600 transition-colors hover:bg-green-500 hover:text-white'>
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
