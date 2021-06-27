import { SearchIcon } from '@heroicons/react/outline';

function Filters({setPerPage}) {
  return (
    <div>
      <div className='h-14 flex justify-between px-20 w-full bg-gray-800 text-white shadow-lg'>
        <div className='flex justify-center items-center h-full'>
          <p>Sort :</p>
          <select name='' id='' className='p-2 bg-gray-800 focus:outline-none'>
            {[
              'Price: Low to High',
              'Price: High to Low',
              'Alphabetically A_Z',
              'Alphabetically Z-A',
              'Date : Old To New',
              'Date: New To Old',
              'Best Selling',
            ].map((e, index) => (
              <option key={index}>{e}</option>
            ))}
          </select>
        </div>
        <div className="text-white">
          <div className='flex justify-center items-center h-full'>
            <p>See :</p>
            <select name='' id='' className='p-2 bg-gray-800 focus:outline-none' onChange={(e)=> setPerPage(e.target.value)} >
              {[
                2,3,4
              ].map((e, index) => (
                <option key={index}>{e}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
