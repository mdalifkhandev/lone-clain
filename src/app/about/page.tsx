import AboutBanner from '@/components/about/AboutBanner';
import CoreValues from '@/components/about/CoreValues';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vision';
import React from 'react';

const page = () => {
    return (
        <div className='bg-white'>
            <AboutBanner/>
            <Mission/>
            <Vision/>
            <CoreValues/>
            {/*
            <AboutBanner></AboutBanner>
            <Mission></Mission>
            <Vision></Vision>
            <CoreValues></CoreValues>
            */}
        </div>
    );
};

export default page;