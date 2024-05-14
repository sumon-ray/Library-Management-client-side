import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            {/* header */}
            <Header />
            {/* outlet */}
           <div className="min-h-[calc(100vh-300px)]">
           <Outlet />
           </div>
            {/* footer */}
        </div>
    );
};

export default Main;