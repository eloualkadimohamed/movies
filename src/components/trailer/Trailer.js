import React from 'react'
import './trailer.css'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
function Trailer() {
    const params = useParams();
    const key= params.ytTrailerId
  return (
    <div  className="react-player-container">
        {(key!=null)?<ReactPlayer controls="true" playing={true} url={`https://youtube.com/watch?v=${key}`}
        width='100%' height="100%" ></ReactPlayer>:null}
    </div>
  )
}

export default Trailer 