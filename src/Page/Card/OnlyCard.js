import React from 'react';

const OnlyCard = ({ img, cardTitle, color }) => {
    return (
        <div className={`card lg:card-side  shadow-xl ${color}`}>
            <figure className='pl-5 pt-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default OnlyCard;