import React, { useState } from 'react';
import './section2.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBackIcon for back action

function Addwatch({ movieshow, visible, onBack  ,setClose, close })  {

    // if (!visible) return null; // remove this line

    return (
        <>
                <div>
                <UperSecMain movieshow={movieshow} close={close} />
            <MovieTodo movieshow={movieshow} setClose={setClose} close={close} />
            </div>
           
        </>
    );
    
}

const UperSecMain = ({ movieshow, close }) => {
    return (
        <>
           
            <div className='uperSecMain'>
                <h3>Movie you have Watched</h3>
                <div className='uperSec'>
                    <p>#️⃣ movies</p>
                    <p>⭐️ {movieshow?.imdbRating || '0.0'}</p>
                    <p>⏳ {movieshow?.Runtime || '0 min'}</p>
                </div>
            </div>
           
        </>
    );
};

const MovieTodo = ({ movieshow, setClose, close }) => {
    return (
        <>
          
                <div className='movietoddo'>
                    <div style={{ width: '80px', height: '80px' }}>
                        <img width='100%' height='100%' src='/images/logo.png' alt="Logo" />
                    </div>
                    <div className='movietodo-info'>
                        <p>{movieshow.Title} has been added to your watchlist!</p>
                        <div className='movietodo-info-div'>
                            <p>⭐️ {movieshow?.imdbRating || '0.0'}</p>
                            <p>🌟 {movieshow?.Genre || 'N/A'}</p>
                            <p>⏳ {movieshow?.Runtime || '0 min'}</p>
                            <DeleteIcon onClick={() => setClose(true)} /> {/* Hide the MovieTodo section on delete */}
                        </div>
                    </div>
                </div>
       
        </>
    );
};

export default Addwatch;
