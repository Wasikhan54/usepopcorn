import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css'
import MoviesDetailsDiv from './section2/Details.js';
import MovieContain from './section2/MovieContain.js';
import Addwatch from './section2/Addwatch.js';
// import StarBorderIcon from '@mui/icons-material/StarBorder';


function Section({ input, setLoading, giveMeLength }) {
    const [moviesData, setMoviesData] = useState([])
    const [movieshow, setMovieshow] = useState({})
    const [showAddwatch, setShowAddwatch] = useState(false);
    const [close , setClose] = useState(true) //by defualt true

    useEffect(() => {
        if (input && input.length > 4) { fetchApi() }
    }, [input])

    const fetchApi = async () => {
        setLoading(true)

        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=77bfa2af&s=${input}`)
        const result = await response.json();
        setLoading(false)
        console.log(result);
        setMoviesData(result)
    }

    giveMeLength(moviesData?.Search?.length)
    // console.log(moviesData?.Search?.length, "length");
    return (
        <div className='section-main'>
            <Movies moviesData={moviesData}
                setMovieshow={setMovieshow}
                setLoading={setLoading}
                movieshow={movieshow}
                showAddwatch={showAddwatch}
                setShowAddwatch={setShowAddwatch}
                setClose={setClose}
                close={close} />
            {/* <MoviesDetailsDiv movieshow={movieshow} setLoading={setLoading} /> */}
            <MovieContain close={close} setClose={setClose} movieshow={movieshow} setMovieshow={setMovieshow} showAddwatch={showAddwatch} setShowAddwatch={setShowAddwatch} />
        </div>
    )
}


export default Section




const Movies = ({ moviesData, setMovieshow,close,setClose, movieshow, setLoading, showAddwatch, setShowAddwatch }) => {

    return (
        <div className='section1'>
            {

                moviesData?.Search?.map((movie) => (
                    <div
                        key={movie.imdbID} // Ensure each element has a unique key
                        onClick={async () => {
                            setLoading(true);
                            const response = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=77bfa2af&s`);
                            const result = await response.json();
                            setLoading(false);
                            setShowAddwatch(true);
                            setMovieshow(result);
                            setClose(false)
                        }}
                        className='movie-main'
                    >
                        <div className='movie-img'>
                            <img src={movie.Poster} alt="Movie Poster" />
                        </div>
                        <div className='movie-info'>
                            <h4>{movie.Title}</h4>
                            <p>📆 {movie.Year}</p>
                        </div>
                    </div>
                ))}

        </div>
    );
}



