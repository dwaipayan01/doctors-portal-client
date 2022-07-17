import React from 'react';
import CardInfo from '../Card/CardInfo';
import HomePageAppoinment from '../HomePageAppointment/HomePageAppoinment';
import Middle from '../Middle/Middle';
import Service from '../Services/Service';
import Services from '../Services/Services';
import Testimonial from '../Testimoninal/Testimonial';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardInfo></CardInfo>
            <Services></Services>
            <Service></Service>
            <Middle></Middle>
            <HomePageAppoinment></HomePageAppoinment>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;