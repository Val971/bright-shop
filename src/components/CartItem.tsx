import React, { useCallback, useState } from 'react';
import { addToCart, removeFromCart } from '../state/cart';
import type { ICartItem } from '../state/cart';
import Select from './Select';
import { FaTrash } from 'react-icons/fa';
import _id_ from '../pages/order/[id].astro';
export const CartItem: React.FC<ICartItem> = ({
  image,
  name,
  price,
  variation,
  id,
  qty,
  uuid,
  countInStock,
}) => {
  const [quantity, setQuantity] = useState<number | string>(qty);

  const handleCartQuantityUpdate = useCallback(async (quantity: string) => {
    await addToCart(uuid, Number(quantity), variation, true);
  }, []);

  const handleRemoveFromCart = useCallback(async () => {
    await removeFromCart(id);
  }, []);

  return (
    <div className='mx-auto p-4 b'>
      <div className='flex gap-6 items-center  w-full  flex-row'>
        <div>
          <div className='w-[100px] h-[100px] '>
            <img src={image} className='w-[100px] h-[100px] object-cover' />
          </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='whitespace-nowrap'>
            <a href={`/product/${uuid}`}>
              <p>{name}</p>
            </a>
          </div>
          <div className='flex gap-5'>
            <p className='font-bold'>{variation}</p>
            <p className='font-bold'>${price}</p>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <div className='w-full min-w-[120px] mx-auto flex justify-center'>
              <Select
                length={countInStock}
                onChange={(e) => {
                  handleCartQuantityUpdate(e.target.value);
                  setQuantity(e.target.value);
                }}
                value={quantity}
                maxWidth={'120px'}
              />
            </div>
            <FaTrash
              className='text-gray-700 cursor-pointer'
              size={20}
              onClick={handleRemoveFromCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
