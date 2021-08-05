import Nav from '../Home/Nav';
import Products from './Products';
import Filters from './Filters';
import { SearchIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
import { GetProducts } from '../../redux/actions/productsActions';
import { useSelector, useDispatch } from 'react-redux';

function ShopPage() {
  const [perPage, setPerPage] = useState(4);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  useEffect(() => {
    dispatch(GetProducts());
  }, []);
  return (
    <>
      <Nav />
      <Filters setPerPage={setPerPage} />
      <h1 className='font-extrabold text-5xl md:text-7xl text-center my-6'>Shop</h1>
      <div className='flex justify-center p-10'>
        <div className='bg-gray-100 p-4 rounded-full w-5/6 flex justify-center space-x-2 items-center shadow-inner  h-16'>
          <SearchIcon className='w-4 h-4' />
          <input
            type='search'
            className='bg-transparent w-full outline-none border-none w-full'
            placeholder='Search....'
          />
        </div>
      </div>
      <div className={`grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-${perPage} p-10`}>
        {products && products.map((data) => <Products perPage={perPage} data={data} />)}
      </div>
    </>
  );
}

export default ShopPage;
