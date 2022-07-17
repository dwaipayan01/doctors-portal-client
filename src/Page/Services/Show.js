import React from 'react';
import './Services.css';

const Show = ({ img, cardTitle }) => {
    return (
        <div className='card-area'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default Show;