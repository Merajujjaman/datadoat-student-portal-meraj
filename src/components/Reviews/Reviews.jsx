import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get('https://college-booking-server-eight.vercel.app/reviews')
            .then(data => setReviews(data.data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                reviews?.map(review => <div
                    key={review._id}
                >
                    <h1 className='text-lg font-semibold'>Name: {review?.name}</h1>
                    <p className='text-gray-600 italic'>{review?.review}</p>
                </div>)
            }
        </div>
    );
};

export default Reviews;