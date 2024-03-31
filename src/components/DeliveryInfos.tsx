export default function DeliveryInfos() {
  return (
    <div className='bg-lightPink flex flex-col md:flex-row px-8 justify-center gap-20 items-center py-20'>
      <h2 className=' text-3xl md:text-4xl max-w-[15rem]'>
        Delivery & Returns
      </h2>
      <div className='max-w-[33rem] text-lg'>
        <p>
          To deliver your favorite products, we have become partners with the
          most reliable companies. We are ready to entrust them with your orders
          and are always on your side if something goes wrong.
        </p>
        <br />
        <p>
          We will be happy to assist you for eligible returns, with a return
          instructions and the return shipping address. If you need a return or
          exchange, send us an email so we can discuss a replacement.
        </p>
      </div>
    </div>
  );
}
