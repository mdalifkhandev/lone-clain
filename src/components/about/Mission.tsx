import Image from 'next/image';

// Assuming your image is in the public folder
import missionImage from '../assets/mission.jpg';

const Mission = () => {
  return (
    <div className='flex flex-col md:flex-row my-4 md:my-8 lg:my-14 justify-center gap-4 items-center mx-5 md:mx-14 lg:mx-28'>
      <div className='md:w-1/2 rounded-lg'>
        <Image 
          src={missionImage} 
          alt="Our Mission" 
          className='rounded-lg'
          // Add width and height for Next.js Image component
          width={600} 
          height={400}
        />
      </div>
      <div className='md:w-1/2 md:space-y-2 space-y-1'>
        <p className='text-[12px] bg-red-100 text-red-950 inline-block rounded-2xl font-semibold py-1 px-3'>Our Mission</p>
        <h2 className='text-2xl md:text-3xl lg:text-3xl text-black font-semibold'>Democratizing Access to Fair Credit</h2>
        <p className='text-sm text-gray-800'>At GUEHI and CO, our mission is to create a more inclusive finalcial ecosystem, where everyone has access to fair credit opportunaties. We believe in breaking down barriers between lenders and borrowers through transparent, data-driven solutions that benefit both sides of the lending equation.</p>
      </div>
    </div>
  );
};

export default Mission;