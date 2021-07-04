import React,{useState, useEffect} from 'react'
import request from './request';
import axios from './axios'
import './banner.css'


const baseURL= "https://image.tmdb.org/t/p/original/"
const Banner = () => {
    const [headline, setHeadline] = useState([])

const bannerHead =async()=>{
        const response = await axios.get(request.fetchNetflixOriginals)
        setHeadline(response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
        ])
        return request
}

useEffect(()=>{
    bannerHead()
},[])

function truncate(str,n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}   

return (
       <header className='banner'
            style={{
                backgroundSize:'cover',
                backgroundImage: `url(${baseURL}${headline?.backdrop_path})`,
                backgroundPosition:'center center'
            }}
       >
            <div className='banner__contents'>
                <h1 className='.banner__title'>{headline?.title || headline?.name || headline?.original_name}</h1>
                <div className='banner__btn'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(headline?.overview,150)}</h1>
            </div>
            <div className='banner__fadeBottom'></div>
       </header>
    )
}

export default Banner
