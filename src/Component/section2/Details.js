import React, { useState } from 'react';
import './section2.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Addwatch from './Addwatch.js';

const MoviesDetailsDiv = ({ movieshow }) => {
    const [selectedStar, setSelectedStar] = useState(null);
    const [hoveredStar, setHoveredStar] = useState(null);
    const [close, setClose] = useState(false); // State to manage closing
    const [detailsVisible, setDetailsVisible] = useState(true); // State to manage Detailsone visibility

    const handleStarClick = (index) => {
        setSelectedStar(index);
    };

    const handleMouseEnter = (index) => {
        setHoveredStar(index);
    };

    const handleMouseLeave = () => {
        setHoveredStar(null);
    };

    return (
        <div className="section2">
            <Addwatch
                movieshow={movieshow}
                hoveredStar={hoveredStar}
                selectedStar={selectedStar}
                visible={detailsVisible} // Pass visibility state
            />

            {!close && movieshow && Object.keys(movieshow).length > 0 && (
                <div className='movie-details-div'>
                    <div className='movie-details'>
                        <ArrowBackIcon onClick={() => {
                            setClose(true);
                            setDetailsVisible(true); // Show Detailsone when closing movie details
                        }} style={{ cursor: 'pointer' }} />
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
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star, index) => (
                            <div
                                key={star}
                                className={`star-icon ${selectedStar === index + 1 ? 'selected' : ''}`}
                                onClick={() => handleStarClick(index + 1)}
                                onMouseEnter={() => handleMouseEnter(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {selectedStar >= index + 1 || (hoveredStar !== null && hoveredStar >= index + 1) ? (
                                    <StarIcon sx={{ color: 'yellow' }} />
                                ) : (
                                    <StarBorderIcon sx={{ color: 'gray' }} />
                                )}
                            </div>
                        ))}
                    </div>

                    {selectedStar && (
                        <div className='star-info'>
                            <p>Selected Star: {selectedStar}</p>
                            <Button variant="contained" style={{ marginTop: '10px' }}>Add to List</Button>
                        </div>
                    )}

                    <div className='movie-para'>
                        <em>{movieshow.Plot}</em>
                        <em>{movieshow.Genre}</em>
                        <em>Directed by {movieshow.Director}</em>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoviesDetailsDiv;
