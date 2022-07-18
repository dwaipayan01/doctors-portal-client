import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';
import React from 'react';
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            image: people1,
            location: "California"


        },
        {
            _id: 2,
            name: "Winson Herry",
            image: people2,
            location: "California"


        },
        {
            _id: 3,
            name: "Winson Herry",
            image: people3,
            location: "California"


        },
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-[120px]">
            {
                reviews.map(item => <Review item={item} key={item._id}></Review>)
            }
        </div>
    );
};

export default Reviews;