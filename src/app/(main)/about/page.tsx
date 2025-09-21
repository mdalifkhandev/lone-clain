import AboutBanner from '@/components/about/AboutBanner';
import CoreValues from '@/components/about/CoreValues';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vision';
import React from 'react';

export const metadata={
    title:'This is Lone About '
}

const page = () => {
    return (
        <div className='bg-white'>
            <AboutBanner />
            <Mission />
            <Vision />
            <CoreValues />
        </div>
    );
};

export default page;