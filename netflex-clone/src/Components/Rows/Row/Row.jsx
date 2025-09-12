// import './row.css'
// import React, { useEffect } from 'react'
// import axios from 'axios'

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//     const [movie, setMovie] = useState([]);
//     const [trailerUrl, seTrailerUrl] = useState('')
//     const base_url = "https://image.tmdb.org/t/p/original"
    

//     useEffect(() => {
//         (async () => {
//             try {
//                 console.log(fetchUrl) 
//                 const request = await axios.get(`http://localhost:4000/api/${fetchUrl}`)
//                 console.log(request)
//                 setMovie(request.data.results)

//             } catch (error) {
//                 console.log('error', error)
//             }
//         }
//         )()
    
// }[fetchUrl])

// }

// const opts = {
//     height: '300',
//     width: '10px',
//     playerVars: {
//       autoplay: 1,  
//     },    
// }

// return (
//     <div className='row'>
//         <h1>{title}</h1>
//         <div className='row_posters'>

            // {movie?.map((movie, index) => (
            //     <img
            //     // onClick/> {()=>handleClick(movie)}
            //         key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path`}
            //              alt=(movie.name) className={`row__poster ${isLargeRow && "row__posterLarge"}`}/>
            
//             ))}




//         </div>

//     </div>
// )
                








import React, { useEffect, useState } from "react";
import axios from "../../../utube/Axios";
import "./row.css";
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
// import request from "../../../utube/request"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); // fixed spelling
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(
          (fetchUrl)
        );
        console.log(request);
        setMovies(request.data.results || []);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);
    
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    console.log(urlParams.get('v'))
                    setTrailerUrl(urlParams.get('v'))
            })
        }
    }

  
  const opts = {
    height: "300",
    width: "100%", 
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      {/* </div> */}
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
