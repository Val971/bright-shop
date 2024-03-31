import newsletterImg from '../assets/newsletterImg.png';
export default function Newsletter() {
  return (
    <div className='bg-[#FCF9F8] justify-center  flex flex-col-reverse md:flex-row  py-20 items-center'>
      <div className='bg-lightPink p-8 flex flex-col gap-5 text-lg md:max-w-[32rem]'>
        <h2 className=' text-3xl md:text-4xl'>Even better with subscription</h2>
        <p>
          Take care of your skin, and we will make sure that your care is
          permanent. Choose a suitable subscription plan and we will deliver
          your toner monthly or quarterly depending on your choice. You’ll also
          be the first to receive test samples of our new products when you sign
          up for an annual subscription, absolutely free of charge.
        </p>
        <div className='flex flex-col md:flex-row gap-5 '>
          <input
            className=' border-black text-black bg-lightPink border-[1px] p-2.5 min-w-[12rem]'
            placeholder='Enter your email'
          />
          <button className='bg-black p-3 min-w-[9rem] text-[#fff]'>
            Subscribe
          </button>
        </div>
      </div>
      <img
        className=' w-[20rem] lg:w-[28.5rem]'
        alt='hero image'
        width='150'
        height='150'
        src={newsletterImg.src}
      />
    </div>
  );
}
