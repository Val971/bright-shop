import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

export default function Contact() {
  return (
    <div
      id='contact'
      className='bg-lightPink flex flex-col px-8 justify-center gap-5 items-center py-20'>
      <h2 className=' text-3xl md:text-4xl'>Contact Us</h2>
      <div className='flex flex-col text-lg items-center justify-center gap-2'>
        <p>Daily 10:00 AM — 7:00 PM</p>
        <hr className='solid bg-[#191919] w-32'></hr>
        <p>5th Ave, NY, 10001, USA</p>
        <p>+1-555-777-1234</p>
        <p>hello-there@example.com</p>
      </div>
      <div className='flex gap-5'>
        <img src={facebook.src} alt='facebook logo' />
        <img src={instagram.src} alt='instagram logo' />
        <img src={twitter.src} alt='twitter logo' />
      </div>
    </div>
  );
}
