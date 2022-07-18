import React from 'react';
import './Services.css';

const Show = ({ img, cardTitle }) => {
    return (
        <div className='card-area'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default Show;