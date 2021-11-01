import React from 'react'

const ProductDescription = ({data}) => {
  return (
    <div className="px-32 my-4 py-10">
      <h1>{data.title}</h1>
      <h1 className="mt-2 text-gray-600">{data.description}</h1>
    </div>
  )
}

export default ProductDescription
