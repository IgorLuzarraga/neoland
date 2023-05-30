import './Review.css'
import React from 'react';

const Review = React.memo(({ title, score }) => {
    console.log('Renderizando Review...');

    return (
        <div>
            <p>
                {title} - {score}
            </p>
        </div>
    );
})

export default Review;