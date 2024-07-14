import {useTranslations} from 'next-intl';
import Button from '../components/Button';
import MotionL from '../layout/MotionL';
import MotionR from '../layout/MotionR';
import Box from '../layout/Box';
import Image from 'next/image';
 
export default function Index() {
  const t = useTranslations('home');
  return (
    <>
    {/* <video className=' absolute top-0 opacity-5' src="" width={1800} height={900} autoPlay loop muted ></video> */}
<div className='min-h-screen max-lg:min-h-[35svh] max-md:min-h-[20svh] grid content-center justify-center relative mb-12 overflow-hidden bg-black bg-opacity-25 z-20 '>
<video autoPlay muted loop className=' absolute top-0 z-0 opacity-85 '><source src='image/vid.mp4' type='video/mp4' /></video>
</div>
    <Box>
<MotionL>
  <div className='mt-10 w-11/12 ml-auto  gap-1 p-1 bg-slate-100/50 rounded-md max-md:w-full'>
  <h2 className='font-bold text-start px-8 text-3xl my-2 '>{t("head1")}</h2>
 <div className='flex  gap-2 max-lg:flex-col'>
<Image src={t("image1")} width={400} height={200} alt='img' className=' max-lg:w-2/4 max-md:w-full'/>
  <p>{t("prag1")}</p>
 </div>
  </div>
</MotionL>


<MotionR>
<div className='mt-10 w-11/12 mr-auto  gap-1 p-1 bg-slate-100/50 rounded-md max-md:w-full'>
  <h2 className='font-bold text-end px- text-3xl my-2'>{t("head2")}</h2>
 <div className='flex  gap-2 max-lg:flex-col'>
  <p>{t("prag2")}</p>
<Image src={t("image2")} width={400} height={200} alt='img' className=' max-lg:w-2/4 max-md:w-full'/>
 </div>
  </div>
</MotionR>

<div className='w-fit mx-auto my-8'>
  
  <Button/>
</div>
</Box>
 </>


  );
}