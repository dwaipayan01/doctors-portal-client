import React from 'react';
import quotes from "../../assets/icons/quote.svg";
const Testimonial = () => {
    return (
        <div className='flex justify-between mt-[84px]'>
            <dir>
                <h2 className='text-xl font-bold' style={{ color: "#19D3AE" }}>Testimonial</h2>
                <h1 className="text-4xl">What out patients says</h1>
            </dir>
            <div>
                <img className='w-[98px] lg:w-[192px]' src={quotes} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;