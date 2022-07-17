import React from 'react';
import CardInfo from '../Card/CardInfo';
import Middle from '../Middle/Middle';
import Service from '../Services/Service';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardInfo></CardInfo>
            <Services></Services>
            <Service></Service>
            <Middle></Middle>

        </div>
    );
};

export default Home;