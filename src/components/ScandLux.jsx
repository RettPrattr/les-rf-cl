import React from 'react'
import AutoSlider from './atoms/AutoSlider'
import useWindowDimensions from './hooks/useWindowDimensions'
import Fade from '@/components/animations/Fade'

const ScandLux = (props) => {

    const { title1, title2, topText, scanImages1, scanImages2, luxImages1, luxImages2 } = props.props

    const [width] = useWindowDimensions()

    return (
        <section className='scandlux container'>
            <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay='0.15' className="flex flex-col cd12 topText">
                <h3 dangerouslySetInnerHTML={{ __html: topText }}></h3>            
            </Fade>
            <div className="flex flex-col cd12 cm4 title">
                <Fade
                    threshold='0'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.3' >
                    <h2 className="">
                        {title1}
                    </h2>
                </Fade>

                <div className={"flex " + (width > 800 ? ' flex-row ' : ' flex-col ')}>
                    <Fade
                        threshold='0'
                        duration='.25'
                        from={0}
                        to={1}
                        delay='0.3' className={"scand-style cd6 cm4 scand-style-1 " + (width > 800 ? ' pl0 ' : ' mb pl0 pr0')}>
                            <AutoSlider 
                                cl="usual scanlux"
                                images={scanImages1}
                            />
                    </Fade>
                    <Fade
                        threshold='0'
                        duration='.25'
                        from={0}
                        to={1}
                        delay='0.4' className={"scand-style cd6 cm4 scand-style-2 " + (width > 800 ? ' pr0 ' : ' mb pl0 pr0')}>
                            <AutoSlider 
                                cl="usual scanlux"
                                images={scanImages2}
                            />
                    </Fade>
                </div>
            </div>
            <div className={"flex flex-col cd12 cm4 title " + (width > 800 ? " mtm " : " mt ")}>
                <Fade
                    threshold='0'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.3' >
                    <h2 className="">
                        {title2}
                    </h2>
                </Fade>
                <div className={"flex " + (width > 800 ? ' flex-row ' : ' flex-col ')}>
                    <Fade
                        threshold='0'
                        duration='.25'
                        from={0}
                        to={1}
                        delay='0.3' className={"scand-style cd6 cm4 scand-style-1 " + (width > 800 ? ' pl0 ' : ' mb pl0 pr0')}>
                            <AutoSlider 
                                cl="usual scanlux"
                                images={luxImages1}
                            />
                    </Fade>
                    <Fade
                        threshold='0'
                        duration='.25'
                        from={0}
                        to={1}
                        delay='0.4' className={"scand-style cd6 cm4 scand-style-2 " + (width > 800 ? ' pr0 ' : ' mb pl0 pr0')}>
                            <AutoSlider 
                                cl="usual scanlux"
                                images={luxImages2}
                            />
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default ScandLux
