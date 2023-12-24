const Add = ({ onClose }) => {
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
            placeholder='Enter name'
          />
        </label>
        <label class='mt-4 block w-full' for='name'>
          <p class='mb-1 text-sm text-gray-600'>Weight</p>
          <input
            class='w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1'
            type='email'
            placeholder='Enter email'
          />
        </label>

        <div class='mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0'>
          <button class='whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white'>
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
