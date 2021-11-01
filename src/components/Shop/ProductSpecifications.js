import React from 'react';

const ProductSpecifications = () => {
  const specification = [
    { title: 'Weight', value: '2kg' },
    { title: 'Color', value: 'White' },
    { title: 'Water Resistance', value: 'Yes' },
    { title: 'Active Noice Cancellation', value: 'Yes' },
  ];
  return (
    <div className='px-32 my-4 py-10'>
      {specification.map((e, index, arr) => (
        <div
          key={index}
          className={`flex justify-between border-r-2 border-t-2 border-l-2 px-10 py-5 mx-auto w-1/2 ${
            index === arr.length - 1 ? 'border-b-2' : ' border-b-1'
          }  border-gray-200`}
        >
          <h1 className=''>{e.title}</h1>
          <h1 className='text-gray-400'>{e.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecifications;
