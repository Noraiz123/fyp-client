import { Button } from '@material-ui/core';
import { TrendingUpIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function HomeProducts() {
  const styles = {
    outline: 'none',
  };
  return (
    <div>
      <h4 className='text-center text-3xl my-4 font-bold flex justify-center items-center'>
        <TrendingUpIcon className='h-7 w-7 mr-3 text-red-500' />
        Top Selling
      </h4>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
          <div className='bg-white pb-4 h-auto shadow-md'>
            <img
              src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              loading='lazy'
              className='w-full object-cover h-48'
            />
            <div className='flex flex-col align-middle text-xl w-full space-y-3 p-3'>
              <p className='font-semibold text-center'>Laptops</p>
              <span className='flex justify-center'>
                {[1, 2, 3, 4, 5].map(() => (
                  <StarIcon className='h-5 w-5 text-yellow-500' />
                ))}
              </span>
              <p className='text-center  font-extrabold text-green-500'>Rs 4000</p>
              <Button variant='outlined' color='secondary' style={styles}>
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
