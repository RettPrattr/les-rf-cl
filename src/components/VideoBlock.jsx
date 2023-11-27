import React from 'react'
import useWindowDimensions from './hooks/useWindowDimensions'

const VideoBlock = (props) => {

  const [width] = useWindowDimensions()
  
  return (
    <div className="videoBlock flex flex-col items-center">
    <div class={"" + (width > 800 ? ' mbl ' : ' mb ')}><h2>Аэросъёмка</h2></div>
    <div className="iframeDiv flex justify-center align-center">
      {/* <iframe width="560" height="315" src={props.link + "?controls=0"} title="Процесс строительства" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <video poster='' controls={true} preload="metadata" playsInline>
        <source src='/videos/video_26_06_23.mp4' type="video/mp4" />
      </video>
    </div>
  </div>
  )
};


export default VideoBlock