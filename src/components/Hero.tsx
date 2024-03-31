import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type HeroProps = {};

export const Hero: React.FC<HeroProps> = () => {
  const [animation, setAnimation] = useState(false);
  const test = () => {
    console.log('test');
  };
  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <div className='bg-lightPink md:h-screen flex flex-col-reverse md:flex-row px-8 md:px-20 justify-center gap-10 items-center py-20'>
      <div className='flex flex-col gap-8 w-full md:w-auto  '>
        <div className=' flex flex-col'>
          <h1 className='text-4xl md:text-6xl'>Your </h1>
          <h1 className='text-4xl md:text-6xl'> beautiful </h1>
          <h1 className='text-4xl md:text-6xl'> morning</h1>
        </div>
        <p className='w-60 md:text-md'>
          Perfect your skin care routine with our body and facial products.
        </p>
        <div className='flex flex-col md:flex-row gap-5'>
          <a
            href='/products'
            className='bg-black p-3 min-w-[9rem] text-center text-[#fff]'>
            Shop Now
          </a>
          <a
            href='/#contact'
            className='border-black border-[1px] text-center p-2.5 min-w-[12rem]'>
            Ask Us Anything
          </a>
        </div>
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, y: 100 }} // Animation initiale : image invisible et décalée vers le bas
          animate={{ opacity: 1, y: 0 }} // Animation finale : image visible et revenant à sa position normale
          transition={{ duration: 1.5 }} //
          alt='hero image'
          className={
            'absolute z-10 mt-44 ml-8 md:mt-40 lg:mt-72 w-72 md:w-96 lg:w-auto'
          }
          src={`../assets/HeroProduct1.png`}
        />

        <motion.img
          initial={{ opacity: 0, y: -50 }} // Définissez les styles initiaux de l'animation
          animate={{ opacity: 1, y: 0 }} // Définissez les styles d'animation
          transition={{ duration: 1 }} // Définissez la durée de l'animation
          alt='hero image'
          className={
            'absolute ml-10 z-10 mt-5 md:top-60 md:right-96 lg:top-32 md:ml-auto w-72 md:w-96 lg:w-auto'
          }
          src={`src/assets/HeroProduct2.png`}
        />
        <img
          alt='hero image'
          className={`${
            animation ? 'opacity-1' : 'opacity-0'
          } w-[45rem] z-0 object-cover h-full transition-opacity duration-1000`}
          src={`../assets/herobg.png`}
        />
      </div>
    </div>
  );
};
