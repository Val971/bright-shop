import { useStore } from '@nanostores/react';
import React, { useCallback, useEffect, useState } from 'react';
import { FaCartPlus, FaSignOutAlt, FaUser, FaUsers } from 'react-icons/fa';
import { FaTableList } from 'react-icons/fa6';

import { authInitialState, authState } from '../state/auth';
import { cart } from '../state/cart';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const user = useStore(authState);
  const isLoggedIn = Boolean(user.token);
  const isAdminLoggedIn = Boolean(user.isAdmin);

  const cartItems = useStore(cart);

  // const handleLogout = useCallback(() => {
  //   authState.set(authInitialState);
  //   if (window) {
  //     localStorage.removeItem('user');
  //     localStorage.removeItem('shippingAddress');
  //     localStorage.removeItem('paymentMethod');
  //     window.location.href = '/login';
  //   }
  // }, []);

  useEffect(() => {
    // Set initial auth state data from storage
    const authStateStorage = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : null;

    if (authStateStorage) {
      authState.set(authStateStorage);
    }

    // Set initial cart items if it exists
    const cartStorage = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart') || '')
      : null;

    if (cartStorage) {
      cart.set(cartStorage);
    }

    if (window.location.pathname === '/') {
      setIsHome(!isHome);
    }
  }, []);

  return (
    <header className={`${isHome ? 'bg-[#fff]' : 'bg-[#F9F9F9]'}`}>
      <nav className='flex justify-between cursor-pointer items-center w-[92%] p-4  mx-auto'>
        <div className='flex gap-20'>
          <a href='/' className='font-extrabold text-2xl'>
            Bright
          </a>

          <div
            className={`nav-links ${openMenu ? 'top-[9%]' : 'top-[-100%]'} ${
              isHome ? 'bg-[#fff]' : 'bg-[#F9F9F9]'
            } duration-500 md:static z-20 h-full items-start md:items-center md:h-auto  absolute  md:min-h-fit min-h-[37vh] left-0  md:w-auto  w-full flex  px-5`}>
            <ul className='flex w-full md:flex-row mt-10 md:mt-auto flex-col md:items-center md:gap-[4vw] gap-8 font-semibold text-4xl md:text-base'>
              <li>
                <a className='hover:text-gray-500 ' href='/products'>
                  Store
                </a>
              </li>
              <li>
                <a className='hover:text-gray-500' href='/#about'>
                  About Us
                </a>
              </li>
              <li>
                <a href='/#contact' className='hover:text-gray-500'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <img alt='icon search' src='/src/assets/search.png' />
          <a href='/account/'>
            <img alt='icon search' src='/src/assets/account.png' />
          </a>

          <a href='/cart' className='flex items-center gap-1'>
            <span className='relative'>
              <FaCartPlus size={20} />{' '}
              {cartItems && cartItems?.length >= 1 && (
                <span className='absolute -right-1 -top-1 rounded-full bg-red-600 w-4 h-4  right text-white font-mono text-[10px]  leading-tight text-center flex justify-center items-center'>
                  {cartItems.reduce((total, item) => total + item.qty, 0)}
                </span>
              )}{' '}
            </span>
            Cart
          </a>
          <img
            className='text-3xl cursor-pointer md:hidden'
            onClick={() => setOpenMenu(!openMenu)}
            alt='icon menu'
            src='/src/assets/menu.png'
          />
        </div>
      </nav>
    </header>
  );
};
