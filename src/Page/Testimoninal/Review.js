import React from 'react';

const Review = ({ item }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ipsum sapiente debitis, at iste illum.</p>
                <div className="flex items-center ">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h1 className="text-2xl">{item.name}</h1>
                        <p>{item.location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;