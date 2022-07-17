import React from 'react';
import OnlyCard from './OnlyCard';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import call from "../../assets/icons/phone.svg";

const CardInfo = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <OnlyCard color={"bg-primary"} cardTitle={"Opening Hours"} img={clock}></OnlyCard>
            <OnlyCard color={"bg-neutral"} cardTitle={"Visit our location"} img={marker}></OnlyCard>
            <OnlyCard color={"bg-primary"} cardTitle={"Contact us now"} img={call}></OnlyCard>
        </div>
    );
};

export default CardInfo;