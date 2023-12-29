import React, { useState } from 'react';
import Add from './Add';

const Card = ({ title, price, weight, description, image }) => {
  const priceInEther = price / 10 ** 18;

  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const openAddModal = () => {
    setAddModalVisible(true);
  };

  const closeAddModal = () => {
    setAddModalVisible(false);
  };

  return (
    <article class='relative flex flex-col overflow-hidden rounded-lg border'>
      <div class='aspect-square overflow-hidden'>
        <img
          class='h-full w-full object-cover transition-all duration-300 group-hover:scale-125'
          src={'http://ipfs.io/ipfs/' + image}
          alt=''
        />
      </div>
      <div class='my-4 mx-auto flex w-10/12 flex-col gap-2 items-start justify-between'>
        <h3 className='mb-2 text-l font-bold text-gray-900'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
        <div className='flex flex-row w-full justify-between'>
          <p className='flex flex-col text-l '>
            <span className='font-bold text-green-500'>
              {weight} kilograms{' '}
            </span>{' '}
            <span className='font-normal'>in stock</span>
          </p>
          <p className='text-2xl font-bold self-center'>${priceInEther}.00</p>
        </div>
      </div>
      <a
        onClick={openAddModal}
        class='cursor-pointer group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600'
      >
        <div class='flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white'>
          Add
        </div>
        <div class='flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white'>
          +
        </div>
      </a>
      {isAddModalVisible && (
        <div class='fixed inset-0 text-xl bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center'>
          <Add onClose={closeAddModal} />
        </div>
      )}
    </article>
  );
};

export default Card;
