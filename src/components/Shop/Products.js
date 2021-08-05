import { StarIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import { IconButton, Button } from '@material-ui/core';
import { ShoppingCart, LocalMall, FavoriteBorderOutlined, Favorite } from '@material-ui/icons';
import { useState } from 'react';
import Link from 'next/link'

function Products({ data }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      <div className='flex flex-col shadow-md'>
        <img loading="lazy" src={data.image} alt='' className='w-full h-44 object-contain' />
        <form className='flex-auto p-6'>
          <div className='flex flex-wrap items-baseline'>
            <h1 className='w-full flex-none font-semibold mb-2.5'>{data.title}</h1>
            <div className='text-4xl leading-7 font-bold text-purple-600'>${data.price}</div>
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
              <Link href={`/shop/${data.id}`}>
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
              </Link>
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
              {favorite ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorderOutlined style={{ color: 'red' }} />}
            </IconButton>
          </div>
          <p className='text-sm text-center text-gray-500'>Free shipping on all continental US orders.</p>
        </form>
      </div>
    </>
  );
}

export default Products;
