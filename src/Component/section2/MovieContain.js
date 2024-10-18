import {React,useState} from 'react';
import './section2.css';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Addwatch from './Addwatch.js';
import StarRating  from '../StarRating.js';

function MovieContain({ movieshow , showAddwatch, setShowAddwatch ,close , setClose }) {

       // Movies Cart or Watch History
       const [cart,setCart] = useState([]);

    //    rating from user
    const [rating, setRating] = useState(8);

    //    funtion for back button 
    const arrowHandler = () => {
        setShowAddwatch(false);
        setClose(true);
    };

    // funtion to update userRating as user selection
const ratingHandler = (ratingFromUser) => {
    console.log(ratingFromUser);
    setRating(ratingFromUser);
}

    if (!movieshow) {
        return <div>Loading...</div>; // Loading placeholder
    }

    // funtion to add movies in cart
    const watchHistoryHandler = (movieshow,rating) => {
        setShowAddwatch(false);
        setClose(true);
        console.log(rating,"-->ad pr click hone pr");

        setCart((prevCart) => [...prevCart,
            {
            img:movieshow.Poster,
            title:movieshow.Title,
            userRating:rating,
            rating:movieshow.imdbRating,
            runtime:movieshow.Runtime,
            imdbID:movieshow.imdbID,
        },
            
        ]);
    }



    return (
        <>  
        <div style={{ width: '40%',backgroundColor:'red' }} className='movie-details-div'>

        {
            close && (  // Use `!close` to show Addwatch when `close` is false
                <Addwatch 
                cart={cart}
                setCart={setCart}
                movieshow={movieshow}
                 setClose={setClose}
                  close={close} />
            )
        }

            { showAddwatch && (
                <div className='movie-details'>
                    <ArrowBackIcon onClick={arrowHandler} /> {/* Back arrow */}
                   <div style={{ display: 'flex' }}>
                   <div className='movie-details-img'>
                        <img src={movieshow.Poster} alt={movieshow.Title} />
                    </div>
                    <div className='movie-details-info'>
                        <h2>{movieshow.Title}</h2>
                        <p>📆 {movieshow.Year}</p>
                        <p>🎥 {movieshow.imdbRating}</p>
                        <p>🎭 {movieshow.Genre}</p>
                    </div>
                   </div>
                    {/* <div className='star-div'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon key={star} sx={{ color: 'yellow' }} />
                        ))}
                    </div> */}

                     {/* STAR-BAR  */}
                     
                     <div>
                     <StarRating giveMeRating={ratingHandler} />
                     <button
                     onClick={()=>watchHistoryHandler(movieshow,rating)}
                     >Add to list</button>
                     </div>
                     
                    <div className='movie-para'>
                        <em>{movieshow.Plot}</em>
                        <em>Directed by {movieshow.Director}</em>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default MovieContain;
