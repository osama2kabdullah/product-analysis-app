import React from 'react';
import useReview from '../hooks/useReview';
import ReviwCard from './ReviwCard';

const Review = () => {
    const [reviews, setReviews] = useReview();
    console.log(reviews);
    return (
        <div className='m-8 grid grid-cols-2'>
            {
                reviews.map(review=><ReviwCard key={review._id} review={review}></ReviwCard>)
            }
        </div>
    );
};

export default Review;