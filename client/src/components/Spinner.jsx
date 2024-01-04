import './Spinner.css';

const Spinner = () => {
  return (
    <div>
      <div class='w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50'>
        <div class='flex justify-center items-center mt-[50vh]'>
          <div class='cup'>
            <div class='handle'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
