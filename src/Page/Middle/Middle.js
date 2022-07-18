import React from 'react';
import image from "../../assets/images/treatment.png";
import DisplayButton from '../Shared/DisplayButton';
import "./Middle.css";

const Middle = () => {
    return (
        <div className="hero min-h-screen  align-items-center">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <DisplayButton>Get Stared</DisplayButton>
                </div>
            </div>
        </div>
    );
};

export default Middle;