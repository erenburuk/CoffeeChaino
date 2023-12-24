import React from 'react';
import Card from '../components/Card';

const ProductPage = () => {
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
