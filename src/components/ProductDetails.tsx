import { useStore } from '@nanostores/react';
import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { addToCart, cart } from '../state/cart';
import {
  errorGetProduct,
  getProductRequest,
  loadingGetProduct,
  productGetState,
  type options,
} from '../state/products';
import { AddReview } from './AddReview';
import { Button } from './Button';
import { Heading } from './Heading';
import { Loader } from './Loader';
import { Message } from './Message';
import { Rating } from './Rating';
import Select from './Select';
import Breadcrumb, { type BreadcrumbProps } from './Breadcrumb';
import { useForm } from 'react-hook-form';

type ProductDetailsProps = {
  id: string;
};

const MyComponent: BreadcrumbProps[] = [
  { label: 'Home', url: '/' },
  { label: 'Store', url: '/products' },
];

export const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
  const [qty, setQty] = useState<string | number>('1');

  const loadingProduct = useStore(loadingGetProduct);
  const errorProduct = useStore(errorGetProduct);
  const product = useStore(productGetState);
  const rating = product?.rating;
  const reviewsCount = product?.reviews?.length;

  const cartItems = useStore(cart);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<{
    quantity: string;
    variation: string;
  }>();

  const handleAddToCart = useCallback(async () => {
    const formValues = getValues();
    const name = formValues.variation;
    console.log(name);
    await addToCart(id, Number(formValues.quantity), formValues.variation);
  }, []);

  useEffect(() => {
    getProductRequest(id);
  }, [id]);
  useEffect(() => {
    const cartItem = cartItems?.find((cartItem) => cartItem?.id === id);
    setQty(cartItem?.qty || 1);
  }, [cartItems]);

  return (
    <section>
      {errorProduct && <Message variant='danger'>{errorProduct}</Message>}
      {loadingProduct && <Loader variant='large' />}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-4'>
        <article>
          {product && (
            <div className='flex justify-center'>
              <img
                width={500}
                src={product.image}
                alt={product.name}
                className=' p-4 object-cover transition-transform duration-300 transform hover:scale-110'
              />
            </div>
          )}

          <h2 className='text-xl md:text-2xl  pt-6 pb-2 mx-auto uppercase'>
            Customer Reviews
          </h2>

          {!product?.reviews?.length && (
            <Message variant='info'>There are no Reviews</Message>
          )}

          {product?.reviews?.map((review, index) => {
            return (
              <div key={index} className='border-2 mb-4 p-2'>
                <div>
                  <span>{review?.name}</span>
                  <span>
                    <Rating text={''} value={review?.rating} />
                  </span>
                </div>
                <p>{review?.comment}</p>
              </div>
            );
          })}
        </article>
        <article>
          <div className='text-xl md:text-2xl font-bold flex flex-col  mx-auto border px-4 pt-4 pb-8 uppercase'>
            <Breadcrumb items={MyComponent} />
            <p className='text-xl md:text-2xl font-bold pt-4 pb-2 '>
              {product?.name}
            </p>
          </div>
          <form onSubmit={handleSubmit(handleAddToCart)}>
            <div className='text-sm flex gap-3 capitalize mx-auto border border-t-0 px-4 pt-4 pb-3'>
              {product &&
                product.size &&
                product?.size.map((size, index) => {
                  return (
                    <div key={index}>
                      {errors.variation && (
                        <p>{'Please a variation is required'}</p>
                      )}
                      <label
                        htmlFor={size.value}
                        className='inline-flex items-center border-[1px] border-[#c6c6c6] px-5 self-center p-5 cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:shadow-sm has-[:checked]:text-white has-[:checked]:bg-slate-800 '>
                        <input
                          required
                          id={size.value}
                          {...register('variation')}
                          type='radio'
                          className=' hidden form-radio text-blue-500 h-4 w-4'
                          value={size.value}
                        />
                        <span className={``}>{size.value}</span>
                      </label>
                    </div>
                  );
                })}
            </div>
            {/* <div className='text-xl md:text-2xl  mx-auto border border-t-0 px-4 pt-4 pb-3'>
              <Rating value={rating} text={`${reviewsCount} reviews`} />
            </div> */}
            <div className='block font-bold text-xl  capitalize mx-auto border border-t-0 px-4 pt-4 pb-3'>
              Price: ${product?.price}
            </div>
            <div className='text-sm flex gap-4   mx-auto border border-t-0 px-4 pt-4 pb-3'>
              Status: {product?.countInStock ? 'In Stock' : 'Out of Stock'}
            </div>
            <div className='text-sm flex gap-4 items-center  mx-auto border border-t-0 px-4 pt-4 pb-3'>
              Quantity:
              <select
                {...register('quantity')}
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                className='border-2 border-slate-400 p-2 rounded-lg w-full'
                style={{ maxWidth: '100px' }}>
                <option key={1} value={1}>
                  {1}
                </option>
                {[...Array.from({ length: product?.countInStock }).keys()].map(
                  (num) => {
                    const number = num + 1;
                    return (
                      <option key={number} value={number + 1}>
                        {number + 1}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
            <div className='text-sm block  mx-auto border border-t-0 px-4 pt-4 pb-3'>
              Description: {product?.description}
            </div>
            <div className='text-sm flex gap-4   mx-auto border border-t-0 px-4 pb-3 justify-center'>
              <Button size='small' type='submit'>
                ADD TO CART
              </Button>
            </div>
            {/* <AddReview id={id} /> */}
          </form>
        </article>
      </div>
    </section>
  );
};
