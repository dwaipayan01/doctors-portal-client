import React from 'react';
import chair from "../../assets/images/chair.png";
import DisplayButton from '../Shared/DisplayButton';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="hero min-h-screen  py-5">
            <div className="hero-content flex-col lg:flex-row-reverse image-area">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smiles Start Here</h1>
                    <p className="py-6 mr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <DisplayButton>Get started</DisplayButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;