import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navebar';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className=''>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;