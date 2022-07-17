import React from 'react';
import doctor from "../../assets/images/doctor.png";
import background from "../../assets/images/appointment.png";
import DisplayButton from '../Shared/DisplayButton';

const HomePageAppoinment = () => {
    return (
        <div style={{ background: `url(${background})` }} className='flex justify-center items-center ml-10 lg:mr-10'>
            <div className='flex-1  hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white px-12 py-12'>
                <h2 style={{ color: "#19D3AE" }} className="text-xl font-bold">Appointment</h2>
                <h1 className="text-4xl mt-4">Make an appointment today</h1>
                <p className="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis labore asperiores nemo! Pariatur maiores dolorem facere similique vero quia necessitatibus eaque officiis dolores dolore enim, minus, maxime labore nesciunt nam. Maiores dolores aliquid quidem qui quod laboriosam soluta modi non!</p>
                <DisplayButton></DisplayButton>
            </div>
        </div>
    );
};

export default HomePageAppoinment;