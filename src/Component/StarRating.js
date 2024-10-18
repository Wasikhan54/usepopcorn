import React from 'react';
import { useState } from 'react';
const ContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
};

const StarStyle = {
    display: 'flex',
};

const textStyle = {
    lineHeight: '1',
    margin: '0',
};


function StarRating({ maxStar , color= '#ffc107',
    size='48px',giveMeRating}) {
    
    const [rating, setRating] = useState(0);

   
    // console.log(rating,"-->rating");
    const[hover, setHover] = useState(0);
    

    // funtion to send user selected rating to parent component
    const handlerRating = (rating) => {
        setRating(rating)
        giveMeRating(rating)
    console.log(rating);
    }


    return (
        <div style={ContainerStyle}>
            <div style={StarStyle}>
                {Array.from({ length: 10 }, (_, i) => (
                    <Star key={i} onClick={() => handlerRating(i + 1)}
                    full={i >= rating} 
                    onHoverIn={() => setHover(i + 1)}
                    OnHoverOut={() => setHover(0)}
                    color={color}
                    size={size}
                    rating={rating}
                    setRating={setRating}
                    />
                ))}
            </div>
            <p style={textStyle}>{rating || ''} </p>
            
        </div>
    );
}

export default StarRating;

function Star({ onClick, full , onHoverIn, OnHoverOut , color, size,rating,setRating }) {
    const StarStyle = {
        width: '20px',
        height: '20px',
        display: 'block',
        cursor: 'pointer',
    }
    return (
        <span style={StarStyle} role='button' onClick={onClick} 
        onMouseEnter={ () => onClick(onHoverIn)}
        onMouseLeave={() => onClick(OnHoverOut)}>
            {
                full ?  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={color}            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>:
                    
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={color}
                    stroke={color}
                >
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                </svg>


            }


        </span>
    );
}