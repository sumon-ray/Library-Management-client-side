import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            {/* header */}
            <Header />
            {/* outlet */}
           <div className="min-h-[calc(100vh-300px)]">
           <Outlet />
           </div>
           <Footer className='w-full' />
            {/* footer */}
        </div>
    );
};

export default Main;