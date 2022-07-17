import React from 'react';
import chair from "../../assets/images/chair.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row-reverse image-area">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl " />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smiles Start Here</h1>
                    <p class="py-6 mr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;