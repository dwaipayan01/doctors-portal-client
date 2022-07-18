import React from 'react';
import CardInfo from '../Card/CardInfo';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import HomePageAppoinment from '../HomePageAppointment/HomePageAppoinment';
import Middle from '../Middle/Middle';
import Service from '../Services/Service';
import Services from '../Services/Services';
import Reviews from '../Testimoninal/Reviews';
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
            <Reviews></Reviews>
            <Form></Form>
            <Footer></Footer>

        </div>
    );
};

export default Home;