import React from 'react';
import { type IProduct } from '../state/products';
import { Rating } from './Rating';

type ProductProps = {
  product: IProduct;
};

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className='my-3 p-5 md:p-3 gap-3 rounded  flex flex-col justify-center items-center'>
      <div className='md:bg-[#00000006]'>
        {' '}
        <a href={`/product/${product.uuid}`}>
          <div className='relative rounded-lg  overflow-hidden'>
            <img
              src={product.image}
              alt={product.name}
              className=' md:w-auto md:p-4 object-cover transition-transform duration-300 transform hover:scale-110'
            />
          </div>
        </a>
      </div>
      <div className='w-full'>
        <a
          href={`/product/${product.uuid}`}
          className='text-lg  font-thin text-[#191919] hover:underline'>
          {product.name}
        </a>
        {/* <div className='text-gray-500'>
          <Rating
            value={product?.rating}
            text={`${product?.numReviews} reviews`}
          />
        </div> */}
        <h3 className='text-2xl font-semibold '>${product.price}</h3>
      </div>
    </div>
  );
};
