import React from 'react'
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl'

const Timeline = (props) => {

    const { title, dotItems } = props.props

  return (
<section class="timeline w-full relative flex flex-col" id="timeline">
    <div class="container cm4 flex flex-row title justify-between mbm">
        <h2>{title}</h2>
    </div>
    <div class="timeline-container relative fadeinup delay-3">
        <div class="line"></div>
        {dotItems?.map((d, i) => {
            return <div key={i} class={"timeline-item relative timeline-item-" + i} >
                <div className="imgwrapper"><Image quality={100} width={1000} height={1000} src={findImageUrl(d.images, "url")} alt={''} loading='lazy'/></div>

                <div class={"dot " + (d.actual ? ' actual ' : ' ')}></div>
                <p class="date">{d.date}</p>
                <p class="description">{d.description}</p>
            </div>
        })}

    </div>
    <div class="lines_v">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
        <div class="line line-4"></div>
        <div class="line line-5"></div>
        <div class="line line-6"></div>
    </div>
</section>
  )
}

export default Timeline
