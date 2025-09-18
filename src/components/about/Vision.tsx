import Image from 'next/image';

// Assuming your image is in the public folder
import visionImage from '../assets/vision.jpg';

const Vision = () => {
  return (
    <div className="flex  flex-col md:flex-row-reverse my-4 md:my-8 lg:my-14 justify-center gap-4 items-center mx-5 md:mx-14 lg:mx-28">
      <div className=" mt-10 md:w-1/2 rounded-lg">
        <Image 
          src={visionImage} 
          alt="Our Vision" 
          className="rounded-lg"
          // Add width and height for Next.js Image component
          width={600} 
          height={400}
        />
      </div>
      <div className="md:w-1/2 md:space-y-2 space-y-1">
        <p className="text-[12px] bg-red-100 text-red-950 inline-block rounded-2xl font-semibold py-1 px-3">
          Our Vision
        </p>
        <h2 className="text-2xl text-black md:text-3xl lg:text-3xl font-semibold">
          Reimagining Financial Relationship
        </h2>
        <p className="text-sm text-gray-900">
          We envision a future where financial relationships are built on trust, transparency, and mutual benefit. By leveraging the power of technology and data, we aim to bridge the gap between lenders and borrowers, fostering a more equitable financial landscape that empowers individuals and communities to thrive.
        </p>
      </div>
    </div>
  );
};

export default Vision;