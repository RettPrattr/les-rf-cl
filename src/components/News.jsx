import React from 'react'
import AutoSlider from './atoms/AutoSlider'
import useWindowDimensions from './hooks/useWindowDimensions'
import Fade from '@/components/animations/Fade'

const News = (props) => {

    const { newsItems } = props.props

    const [width] = useWindowDimensions()

  return (
    <section className='news '>
      <div className={"container flex flex-wrap" + (width > 800 ? " flex-row" : ' flex-col ')}>
        {newsItems?.map((n, i) => {
            return <Fade 
                    threshold={0}
                    duration='.25'
                    from={0}
                    to={1}
                    delay={i > 5 ? 0.8 : 0 + 0.2 * i}
                    className='newsItem flex cd4 cm4 flex-col mb' key={i}>
                    <div className="img-wrapper mbs">
                        <AutoSlider 
                          cl="usual-2 news"
                            images={n.images}
                        />
                    </div>
                    <p className='date'>{n.date}</p>
                    <h2 className='title'>{n.title}</h2>
                    <p className='description'>{n.description}</p>

            </Fade>
        })}
      </div>
    </section>
  )
}

export default News
