import React from 'react';
import './section2.css';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Addwatch from './Addwatch.js';

function MovieContain({ movieshow , showAddwatch, setShowAddwatch ,close , setClose }) {
    const arrowHandler = () => {
        setShowAddwatch(false);
        setClose(true);
    };

    if (!movieshow) {
        return <div>Loading...</div>; // Loading placeholder
    }

    return (
        <> 
         {/* {
            close && (  // Use `!close` to show Addwatch when `close` is false
                <Addwatch movieshow={movieshow} setClose={setClose} close={close} />
            )
        } */}
        
        <div style={{ width: '40%',backgroundColor:'red' }} className='movie-details-div'>

        {
            close && (  // Use `!close` to show Addwatch when `close` is false
                <Addwatch movieshow={movieshow} setClose={setClose} close={close} />
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
                    <div className='star-div'>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon key={star} sx={{ color: 'yellow' }} />
                        ))}
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
