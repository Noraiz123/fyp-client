import { Button, FormControlLabel, Radio, TextField } from '@material-ui/core';
import Nav from '../Home/Nav';

const ShopCheckout = () => {
  return (
    <div>
      <Nav />
      <div className='p-20'>
        <h1 className='font-bold text-4xl'>Checkout</h1>
        <div className='grid grid-cols-1 md:grid-cols-2  my-10 space-y-3 md:space-x-20 md:space-y-0'>
          <div>
            <h1 className='border-b-2 border-black'>Shipping Info</h1>
            <div className='mt-6 space-y-10'>
              <div className='grid grid-cols-1'>
                <TextField variant='outlined' label='Email' />
              </div>
              <div className='grid grid-cols-2 space-x-4'>
                <TextField variant='outlined' label='First Name' />
                <TextField variant='outlined' label='Last Name' />
              </div>
              <div className='grid grid-cols-1'>
                <TextField variant='outlined' label='Shipping Address' />
              </div>
              <div className='grid grid-cols-2 space-x-4'>
                <TextField variant='outlined' label='City' />
                <TextField variant='outlined' label='State' />
              </div>
              <div className='grid grid-cols-2 space-x-4'>
                <TextField variant='outlined' label='Zip Code' />
              </div>
            </div>
          </div>
          <div>
            <h1 className='border-b-2 border-black'>Order Summary</h1>
            <div className='bg-gray-50 p-10'>
              <div className='flex mt-5'>
                <h1 className='mr-auto'>Subtotal</h1>
                <p className='text-gray-500'>$59.95</p>
              </div>
              <div className='flex mt-5'>
                <h1 className='mr-auto'>Total Items</h1>
                <p className='text-gray-500'>1</p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2  my-10 space-y-3 md:space-x-20 md:space-y-0'>
          <div>
            <h1 className='border-b-2 border-black'>Payment Info</h1>
            <div className='border-gray-200 border-2 my-7 p-10'>
              <div className='mt-6 space-y-10'>
                <div className='space-y-4'>
                  <div className='grid grid-cols-1'>
                    <FormControlLabel value='Credit/Debit Card' control={<Radio />} label='Credit or Debit Card' />
                  </div>
                  <div className='grid grid-cols-1'>
                    <TextField variant='outlined' label='Card Number' />
                  </div>
                  <div className='grid grid-cols-2 space-x-4'>
                    <TextField variant='outlined' label='Exp MM/YY' />
                    <TextField variant='outlined' label='CVV' />
                  </div>
                  <div className='grid grid-cols-1'>
                    <TextField variant='outlined' label='Phone Number' />
                  </div>
                </div>
              </div>
              <div className='mt-6 space-y-10'>
                <div>
                  <div className='grid grid-cols-1'>
                    <FormControlLabel value='Credit/Debit Card' control={<Radio />} label='Cash On Delivery' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCheckout;
