import { useStore } from '@nanostores/react';
import { useMemo } from 'react';
import { cart } from '../state/cart';
import type { ICartItem } from '../state/cart';
import { CartItem } from './CartItem';
import { Message } from './Message';
import { Heading } from './Heading';
import { Button } from './Button';
import type { BreadcrumbProps } from './Breadcrumb';
import Breadcrumb from './Breadcrumb';

type CartListProps = {};

const MyComponent: BreadcrumbProps[] = [
  { label: 'Home', url: '/' },
  { label: 'Store', url: '/products' },
  { label: 'Shopping cart', url: '/cart' },
];

export const CartList: React.FC<CartListProps> = () => {
  const cartItems = useStore(cart);

  const subTotalQuantity = useMemo(() => {
    return cartItems?.reduce((cummulation, item) => cummulation + item.qty, 0);
  }, [cartItems]);

  //   Total amount of individual items
  const subTotalAmount = useMemo(() => {
    return cartItems
      ?.reduce(
        (cummulation: number, item: ICartItem) =>
          cummulation + item.qty * item.price,
        0
      )
      .toFixed(2);
  }, [cartItems]);

  return (
    <section className='p-6'>
      {!cartItems?.length && (
        <Message variant='secondary'>
          You have selected no items{' '}
          <a href='/' className='underline text-blue-500'>
            Go Home
          </a>
        </Message>
      )}

      {cartItems && cartItems?.length >= 1 && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-4'>
          <div className='w-full mx-auto max-w-[600px]'>
            <Heading text='Shopping cart' variant='h1' textAlign='left' />
            <Breadcrumb items={MyComponent} />
            {cartItems?.map((cartItem) => {
              return (
                <CartItem
                  uuid={cartItem.uuid}
                  variation={cartItem.variation}
                  key={cartItem.id}
                  countInStock={cartItem?.countInStock}
                  image={cartItem?.image}
                  name={cartItem?.name}
                  price={cartItem?.price}
                  id={cartItem?.id}
                  qty={cartItem?.qty}
                />
              );
            })}
            <hr />
            <div className='flex justify-between mt-5'>
              <h2 className='text-xl font-bold md:text-2xl  pb-2 uppercase'>
                Total
              </h2>
              <div className='text-xl flex font-bold gap-4  pt-4 pb-3'>
                ${subTotalAmount}
              </div>
            </div>
          </div>
          <div className='mb-6 mx-auto py-4'>
            <Heading text='Checkout' variant='h1' textAlign='left' />
            <div className='flex flex-col gap-8'>
              <p>
                Enter your email address. This address will be used to send you
                order status updates.
              </p>
              <input
                className=' border-black text-black bg-lightPink border-[1px] p-2.5 w-full min-w-[12rem]'
                placeholder='Enter your email'
              />
              <button
                onClick={() => undefined}
                className='bg-black p-3 min-w-[9rem] text-[#fff] w-full'>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
