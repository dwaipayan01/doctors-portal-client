import React from 'react';

const OnlyCard = ({ img, cardTitle, color }) => {
    return (
        <div class={`card lg:card-side  shadow-xl ${color}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default OnlyCard;