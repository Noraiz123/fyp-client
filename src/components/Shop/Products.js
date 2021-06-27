import { StarIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import { IconButton, Button } from '@material-ui/core';
import { ShoppingCart, LocalMall, FavoriteBorderOutlined, Favorite } from '@material-ui/icons';
import { useState } from 'react';

function Products() {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      <div className='flex flex-col shadow-lg'>
        <div className='h-4/5'>
          <img
            src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt=''
            className='w-full object-cover h-full'
          />
        </div>
        <form className='flex-auto p-6'>
          <div className='flex flex-wrap items-baseline'>
            <h1 className='w-full flex-none font-semibold mb-2.5'>Kids Jumpsuit</h1>
            <div className='text-4xl leading-7 font-bold text-purple-600'>$39.00</div>
            <div className='text-sm font-medium text-gray-400 ml-3'>In stock</div>
          </div>
          <div className='flex items-baseline my-8'>
            <span className='flex justify-center'>
              {[1, 2, 3, 4, 5].map(() => (
                <StarIcon className='h-5 w-5 text-yellow-500' />
              ))}
            </span>
          </div>
          <div className='flex space-x-3 mb-4 text-sm font-semibold'>
            <div className='w-full  flex space-x-3'>
              <Button
                variant='contained'
                style={{
                  outline: 'none',
                  background: '#1F2937',
                  borderRadius: '50px',
                  width: '50%',
                  whiteSpace: 'nowrap',
                }}
                color='primary'
                startIcon={<LocalMall />}
              >
                Buy Now
              </Button>
              <Button
                variant='outlined'
                style={{ outline: 'none', borderRadius: '50px', width: '50%', whiteSpace: 'nowrap' }}
                color='secondary'
                startIcon={<ShoppingCart />}
              >
                Add TO Cart
              </Button>
            </div>
            <IconButton style={{ outline: 'none' }} onClick={() => setFavorite(!favorite)}>
              {favorite ? (
                <Favorite style={{ color: 'purple' }} />
              ) : (
                <FavoriteBorderOutlined style={{ color: 'purple' }} />
              )}
            </IconButton>
          </div>
          <p className='text-sm text-center text-gray-500'>Free shipping on all continental US orders.</p>
        </form>
      </div>
    </>
  );
}

export default Products;
