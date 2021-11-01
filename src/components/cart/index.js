import { Button, IconButton } from '@material-ui/core';
import { Delete, LocalMall } from '@material-ui/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Nav from '../Home/Nav';

const ShoppingCart = () => {
  const iconStyle = {
    outline: 'none',
  };
  return (
    <div>
      <Nav />
      <div className='p-20'>
        <h1 className='font-bold text-4xl'>Shopping Bag</h1>
        <div className='grid grid-cols-1 md:grid-cols-2  my-10 space-y-3 md:space-x-20 md:space-y-0'>
          <div>
            <h1 className='border-b-2 border-black'>1 Item</h1>
            <div className='flex space-x-6 bg-gray-50'>
              <div className='mt-4'>
                <img src='https://s7d2.scene7.com/is/image/aeo/2153_5566_300_f?qlt=90,0&fmt=jpeg&fit=crop&wid=300&hei=390'></img>
              </div>
              <div className='mt-6'>
                <h1>AE SUPER SOFT FLANNEL HOODIE</h1>
                <h1>$59.95</h1>
                <div className='mt-5 text-gray-400 font-light'>
                  <p>Item Price: $59.95 </p>
                  <p>Qty: 1</p>
                </div>
                <div className='mt-5'>
                  <IconButton style={iconStyle}>
                    <Delete className='text-red-500' />
                  </IconButton>
                  <IconButton style={iconStyle}>
                    <FavoriteBorderIcon className='text-red-500' />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='border-b-2 border-black'>Order Summary</h1>
            <div className="bg-gray-50 p-10">
              <div className='flex mt-5'>
                <h1 className='mr-auto'>Subtotal</h1>
                <p className='text-gray-500'>$59.95</p>
              </div>
              <div className='flex mt-5'>
                <h1 className='mr-auto'>Total Items</h1>
                <p className='text-gray-500'>1</p>
              </div>
              <div className="mt-5 flex justify-center align-items-center">
                <Button
                  variant='contained'
                  style={{
                    outline: 'none',
                    background: '#1F2937',
                    borderRadius: '50px',
                    whiteSpace: 'nowrap',
                  }}
                  color='primary'
                  startIcon={<LocalMall />}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
