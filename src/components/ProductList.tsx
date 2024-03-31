import { useStore } from '@nanostores/react';
import React, { useEffect } from 'react';
import {
  errorProductList,
  listProductRequest,
  loadingProductList,
  productListState,
} from '../state/products';
import { Loader } from './Loader';
import { Message } from './Message';
import { Product } from './Product';

type ProductListProps = {};

export const ProductList: React.FC<ProductListProps> = () => {
  const loading = useStore(loadingProductList);
  const error = useStore(errorProductList);
  const productList = useStore(productListState);

  useEffect(() => {
    listProductRequest();
  }, []);

  return (
    <div className='my-8 md:px-5'>
      {loading && <Loader variant='large' />}
      {error && <Message variant='danger'>{error}</Message>}
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-10 max-w-[1800px]'>
          {productList?.products?.map((product) => {
            return <Product product={product} key={product?.uuid} />;
          })}
        </div>
      </div>
    </div>
  );
};
