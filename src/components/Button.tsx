import React from 'react';
import { Loader } from './Loader';

type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  size?: 'small' | 'large';
  onClick?(): void;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  size = 'large',
  onClick,
  type = 'submit',
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-black text-white px-5 py-2 text-lg md:text-xl font-medium w-full max-w-[250px] flex gap-3 justify-center mt-8 cursor-pointer hover:bg-slate-800'>
      {children} {loading && <Loader variant='small' />}
    </button>
  );
};
{
  /* <button
onClick={() => test()}
className='bg-black p-3 min-w-[9rem] text-[#fff]'>
  ADD TO CART
</button> */
}
