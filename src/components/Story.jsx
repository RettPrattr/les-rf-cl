import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import useWindowDimensions from './hooks/useWindowDimensions'
import Fade from '@/components/animations/Fade'

function Story(props) {

    const [width, height] = useWindowDimensions();

    const {type, storyItems} = props.props
    
    const [imagesURL, setImagesURL] = useState([])

    useEffect (()=>{
        let imageUrl = []
        storyItems.map((s, i) => {
            if (width > 800) {imageUrl.push(s?.images?.data?.attributes?.formats?.large?.url)}
            else {imageUrl.push(s?.images?.data?.attributes?.formats?.large?.url)}
        })
        setImagesURL(imageUrl)
    }, [width])

    return (
        <section className={'story story-' + type}>
            <div className="container items-start flex flex-row">
                {storyItems?.map((s, i) => {
                    return  <Fade
                    threshold='0.8'
                    duration='.25'
                    from={0}
                    to={1}
                    delay={i * 0.2}
                    key={i} className={"imageBlock cd6 cm4 flex  flex-col " + (width > 800 ? ' mt ' : ' mb ')}
                >
                    {imagesURL[i] && <Image width={2000} height={2000} src={`${process.env.API_LINK}${imagesURL[i]}`} alt='' className='photo' loading='lazy'/>}
                    <h2 className='subtitle'>{s.title}</h2>
                    <p className='text'>{s.description}</p>
                </Fade>
                })}
            </div>
        </section>
    )
}

export default Story