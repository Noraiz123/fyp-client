import Nav from '../Home/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { StarIcon, InformationCircleIcon } from '@heroicons/react/solid';
import { HomeIcon, CashIcon, ExclamationIcon, PhotographIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { Button, IconButton } from '@material-ui/core';
import { ShoppingCart, Facebook, Twitter, WhatsApp } from '@material-ui/icons';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ProductDescription from './ProductDescription';
import ProductSpecifications from './ProductSpecifications';
import ProductReviews from './ProductReviews';

function ProductsDetails() {
  const router = useRouter();
  const [options, SetOptions] = useState('description');
  const { productId } = router.query;
  const product = useSelector((state) => state.productsReducer.products.find((e) => e.id == productId));
  const style = {
    outline: 'none',
    borderRadius: '50px',
    whiteSpace: 'nowrap',
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const iconStyle = {
    outline: 'none',
  };

  const handleOptions = (value) => {
    SetOptions(value);
  };

  const activeStyling = () => {
    return 'bg-red-500 rounded-full text-white';
  };

  return (
    <div className='w-full h-screen'>
      <Nav />
      {product && (
        <>
          <div className='px-32 my-10 space-x-2'>
            <div className='p-10 shadow-md space-y-14 flex justify-center items-center md:col-span-3'>
              <div className='w-3/12'>
                <img loading='lazy' className='' src={product.image} />
              </div>
              <div className='space-y-4 space-x-10'>
                <div className='flex flex-col items-center space-y-4'>
                  <h5 className='font-extrabold text-xl'>{product.title}</h5>
                  <span className='flex'>
                    {[1, 2, 3, 4, 5].map(() => (
                      <StarIcon className='h-5 w-5 text-yellow-500' />
                    ))}
                  </span>
                  <p className='text-4xl leading-7 font-bold text-purple-600'>${product.price}</p>
                </div>
                <div className='w-full  mx-auto'>
                  {product.description
                    .split('.')
                    .filter(Boolean)
                    .map((e, i) => (
                      <ul key={i} type=''>
                        <li className='text-gray-500'>{e}</li>
                      </ul>
                    ))}
                </div>
                <div className='my-4 flex flex-col items-center'>
                  <p>Quantity</p>
                  <div className='flex items-center space-x-4 my-2'>
                    <Button variant='outlined' color='primary' style={style}>
                      +
                    </Button>
                    <div className='bg-gray-100 w-20 py-2 rounded-full shadow-inner'>
                      <input type='number' className='focus:outline-none bg-transparent w-full text-center px-2' />
                    </div>
                    <Button variant='outlined' color='primary' style={style}>
                      -
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant='contained'
                      style={{ outline: 'none', borderRadius: '50px', whiteSpace: 'nowrap', margin: '10px 0' }}
                      color='secondary'
                      startIcon={<ShoppingCart />}
                    >
                      Add TO Cart
                    </Button>
                  </div>
                </div>
                <div className='flex w-10 items-center'>
                  <p className='mr-4 font-medium'>Share:</p>
                  <IconButton style={iconStyle}>
                    <Facebook />
                  </IconButton>
                  <IconButton style={iconStyle}>
                    <Twitter />
                  </IconButton>
                  <IconButton style={iconStyle}>
                    <WhatsApp />
                  </IconButton>
                </div>
              </div>
            </div>
            {/* <div className='bg-gray-100 shadow-md p-4 space-y-10'>
              <div className='flex justify-between items-center text-gray-500'>
                <p>Delivery Options</p>
                <div className='p-2 cursor-pointer rounded-full hover:bg-gray-200'>
                  <InformationCircleIcon className='h-4 w-4' />
                </div>
              </div>
              <div>
                <div className='flex p-3 border-b border-gray-300 justify-between'>
                  <div className='flex space-x-2 items-center'>
                    <HomeIcon className='h-4 w-4' />
                    <div>
                      <p>Home Delivery</p>
                      <small className='text-gray-400'>3-5 Working Days</small>
                    </div>
                  </div>
                  <div>Rs 49</div>
                </div>
                <div className='flex p-3 border-b border-gray-300 justify-between'>
                  <div className='flex space-x-2 items-center'>
                    <CashIcon className='h-4 w-4' />
                    <p>Cash On Delivery Available</p>
                  </div>
                </div>
              </div>
              <div>
                <p>Return & Warranty</p>
                <div className='p-3 border-b my-3 border-gray-300 justify-between'>
                  <div className='flex space-x-2 items-center'>
                    <ExclamationIcon className='h-4 w-4' />
                    <div>
                      <p>7 Days Return</p>
                      <small className='text-gray-400'>Change of mind is not acceptable</small>
                    </div>
                  </div>
                </div>
                <div className='p-3 border-b my-3 border-gray-300 justify-between'>
                  <div className='flex space-x-2 items-center'>
                    <ExclamationIcon className='h-4 w-4' />
                    <div>
                      <p>Warranty Not Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className='flex justify-center  text-gray-400'>
            <p
              onClick={() => handleOptions('description')}
              className={`border-gray-200 border-r-2 ${
                options === 'description' && activeStyling()
              } px-4 py-2 hover:bg-red-500 hover:rounded-full cursor-pointer hover:text-white`}
            >
              Description
            </p>
            <p
              onClick={() => handleOptions('specification')}
              className={`border-gray-200 border-r-2 px-4 py-2 ${
                options === 'specification' && activeStyling()
              } hover:bg-red-500 hover:rounded-full cursor-pointer hover:text-white`}
            >
              Specification
            </p>
            <p
              onClick={() => handleOptions('reviews')}
              className={`px-4 border-gray-200 border-r-2 py-2 ${
                options === 'reviews' && activeStyling()
              } hover:bg-red-500 hover:rounded-full cursor-pointer hover:text-white`}
            >
              Reviews
            </p>
          </div>
          <div>
            {options === 'description' ? (
              <ProductDescription data={product} />
            ) : options === 'specification' ? (
              <ProductSpecifications />
            ) : (
              <ProductReviews />
            )}
          </div>
          {/* <div className='p-10 w-full'>
            <p className='text-center text-2xl'>Product Reviews</p>
            <div className='flex bg-gray-200 px-2 my-5 w-full shadow-inner md:w-3/6 items-center rounded-full mx-auto'>
              <input
                type='text'
                className='bg-transparent focus:outline-none w-full'
                placeholder='Add your Review...'
              />
              <div className='flex space-x-2'>
                <IconButton className='focus:outline-none'>
                  <PhotographIcon className='h-8 w-8 text-yellow-400' />
                </IconButton>
                <IconButton className='focus:outline-none'>
                  <PlusCircleIcon className='h-8 w-8 text-green-500' />
                </IconButton>
              </div>
            </div>
            <div className="w-full mx-auto flex flex-col justify-center">
              <p>Add Product Rating</p>
              <ReactStars count={5} onChange={ratingChanged} size={24} activeColor='#ffd700' />
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}

export default ProductsDetails;
