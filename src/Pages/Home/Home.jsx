import React from 'react';
import UseAuth from '../../UseAuth/UseAuth';
import Header from '../../Shared/Header';
import CategoryCard from '../../Components/Category-Card/CategoryCard';
import Banner from './Components/Banner';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';

const Home = () => {

    return (
        <div>
            <Banner />
        <div className="my-10">
        <CategoryCard /> 
        </div>
        <Section1 />
        <Section2 />
       
        </div>
    );
};

export default Home;