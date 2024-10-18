import React from 'react';
import './section2.css';
import DeleteIcon from '@mui/icons-material/Delete';

function Addwatch({ movieshow, setClose, close, cart, setCart }) {
    return (
        <>
            <div>
                <UperSecMain movieshow={movieshow} close={close} cart={cart} />
                <MovieTodo movieshow={movieshow} setClose={setClose} close={close} cart={cart} setCart={setCart} />
            </div>
        </>
    );
}

const UperSecMain = ({ movieshow, close, cart }) => {
    return (
        <>
            <div className='uperSecMain'>
                <h3>Movie you have Watched</h3>
                <div className='uperSec'>
                    <p>#️⃣ {cart.length} movies</p>
                    <p>⭐️ {movieshow?.imdbRating || '0.0'}</p>
                    <p>⏳ {movieshow?.Runtime || '0 min'}</p>
                </div>
            </div>
        </>
    );
};

const MovieTodo = ({ cart, setCart }) => {
    const deleteMovieHandler = (id) => {
        setCart((prevCart) =>
            prevCart.filter((movie) => movie.imdbID !== id) // Use correct imdbID for comparison
        );
    };

    return (
        <>
            {cart.map((movie,index) => (
                <div className='movietoddo' key={movie.imdbID}> {/* Use imdbID as key */}
                    <div style={{ width: '80px', height: '80px' }}>
                        <img width='100%' height='100%' src={movie.img} alt="Movie Poster" />
                    </div>
                    <div className='movietodo-info'>
                        <p>{movie.title}</p>
                        <div className='movietodo-info-div'>
                            <p>⭐️ {movie.rating || '0.0'}</p>
                            <p>🌟 {movie.userRating || 'N/A'}</p>
                            <p>⏳ {movie.runtime || '0 min'}</p>
                            <DeleteIcon onClick={() => deleteMovieHandler(movie.imdbID)} /> {/* Pass correct imdbID */}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Addwatch;
