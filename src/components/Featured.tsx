import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import {
  loadingProductList,
  errorProductList,
  productListState,
  listProductRequest,
} from '../state/products';
import { Loader } from './Loader';
import { Message } from './Message';

type FeaturedProps = {};

export const Featured: React.FC<FeaturedProps> = () => {
  const loading = useStore(loadingProductList);
  const error = useStore(errorProductList);
  const productList = useStore(productListState);

  useEffect(() => {
    listProductRequest();
  }, []);
  return (
    <section className='bg-lightPink px-8 flex flex-col gap-16 py-20 items-center'>
      {loading && <Loader variant='large' />}
      {error && <Message variant='danger'>{error}</Message>}
      <h2 className=' text-3xl md:text-4xl'>Featured Products</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-20 '>
        {productList.products
          ?.filter((product) => product.featured)
          .map((prod) => {
            return (
              <a
                href={`/product/${prod._id}`}
                key={prod._id}
                className='flex flex-col items-center'>
                <img
                  className='mb-5 rounded-full h-32 '
                  alt='article 1'
                  src={prod.image}
                />
                <p className='text-lg'>{prod.name}</p>
                <p className='text-lg'>${prod.price}</p>
              </a>
            );
          })}
      </div>
    </section>
  );
};
