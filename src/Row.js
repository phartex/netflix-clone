import './Row.css'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from './axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseURL= "https://image.tmdb.org/t/p/original/"


const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    const fetchData =async ()=>{
        const response = await axios.get(fetchUrl)
        setMovies(response.data.results)
        
        return response
    }
  console.log(movies)
    useEffect(()=>{
        fetchData()
    },[fetchUrl])
// https://developers.google.com/youtube/player_parameters
const opts = {
    height:'390',
    width:'100%',
    playerVars:{

        autoplay:1,
    },
}

const handleUrl = (movie)=>{
    if(trailerUrl){
        setTrailerUrl('')
    }else{
        movieTrailer(movie.name || '')
        .then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search) ;
            setTrailerUrl(urlParams.get("v")) 
        })
        .catch((error) => console.log(error))
    }
}
    return(
        <div className='row'>
            {title}
            <div className='row__posters'>
                {movies.map((movie)=>{
                    return(
                        <img 
                        onClick ={()=> handleUrl(movie)}
                        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row__poster ${isLargeRow ? 'row__posterLarge': ''} `}
                        key={movie.id}
                        /> 
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
            
        </div>
    )
}

export default Row
