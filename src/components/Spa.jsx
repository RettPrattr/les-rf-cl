import { React, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import useWindowDimensions from './hooks/useWindowDimensions'
import Fade from '@/components/animations/Fade'
import { motion, useScroll, useTransform } from "framer-motion";


const Spa = (props) => {

    const ref1 = useRef(null)

    const { scrollYProgress } = useScroll({target: ref1,})

    const [pinBox, setPinBox] = useState(true);

    let boxY1desk
    let boxY2desk
    let boxY3desk
    
    let boxY1
    let boxY2
    let boxY3

    const [width, height] = useWindowDimensions()

    boxY1desk = useTransform(scrollYProgress, [0.01, 0.16], [0.4, height * .26 ])
    boxY2desk = useTransform(scrollYProgress, [0.53, 0.68], [0.4, height * .26 ])
    boxY3desk = useTransform(scrollYProgress, [0.75, 1], [0.2, height * .26 ])

    boxY1 = useTransform(scrollYProgress, [0.01, 0.16], [0.4, height * .34 ])
    boxY2 = useTransform(scrollYProgress, [0.49, 0.64], [0.4, height * .34 ])
    boxY3 = useTransform(scrollYProgress, [0.93, 1.08], [0.4, height * .34 ])

    const { title1, description1, title2, description2, title3, description3, title4, description4, title5, description5, title6, description6, image1, image2, image3, image4, image5, image6 } = props.props

    const [imagesURL, setImagesURL] = useState([])

    useEffect(()=>{
        let imageUrl = []
        if (width > 800) {
            imageUrl.push(`${process.env.API_LINK}${image1.data?.attributes?.formats?.large?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image2.data?.attributes?.formats?.large?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image3.data?.attributes?.formats?.large?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image4.data?.attributes?.formats?.large?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image5.data?.attributes?.formats?.large?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image6.data?.attributes?.formats?.large?.url}`)
        }
        else {
            imageUrl.push(`${process.env.API_LINK}${image1.data?.attributes?.formats?.small?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image2.data?.attributes?.formats?.small?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image3.data?.attributes?.formats?.small?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image4.data?.attributes?.formats?.small?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image5.data?.attributes?.formats?.small?.url}`)
            imageUrl.push(`${process.env.API_LINK}${image6.data?.attributes?.formats?.small?.url}`)
        }
        setImagesURL(imageUrl)
    }, [width])


  return (
    <section ref={ref1} className="block-3 spa container" id="spa">
    <div className={"flex cm4 mbm relative  " + (width > 800 ? ' flex-row ' : ' flex-col ')}>
        <Fade
            threshold='0'
            duration='.25'
            from={0}
            to={1}
            delay='0.3'
            className="card cd8 cm4 fadeinup delay-1">
            <div className="img-wrapper mbs">
                {imagesURL[0] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[0]}  alt={''} loading='lazy'/>}
            </div> 
            <h2 className='mbs'>{title1}</h2>
            <p dangerouslySetInnerHTML={{ __html: description1 }}></p>
        </Fade>
        {width > 1500 ? <motion.div 
            style={{
                position: width > 800 ? "absolute" : "relative",
                top: pinBox && width > 800 ? boxY1desk : "auto",
                bottom: pinBox && width > 800 ? "auto" : 0,
                right: "0%",
            }}
            className="cd4 cm4 ">
            <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay='0.5'
                className="card ">
                <div className="img-wrapper mbs">
                    {imagesURL[1] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[1]}  alt={''} loading='lazy'/>}
                </div> 
                <h2 className='mbs'>{title2}</h2>
                <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
            </Fade>
        </motion.div> : <motion.div 
            style={{
                position: width > 800 ? "absolute" : "relative",
                top: pinBox && width > 800 ? boxY1 : "auto",
                bottom: pinBox && width > 800 ? "auto" : 0,
                right: "0%",
            }}
            className="cd4 cm4 ">
            <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay='0.5'
                className="card ">
                <div className="img-wrapper mbs">
                {imagesURL[1] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[1]}  alt={''} loading='lazy'/>}
                </div> 
                <h2 className='mbs'>{title2}</h2>
                <p dangerouslySetInnerHTML={{ __html: description2 }}></p>
            </Fade>
        </motion.div>}

    </div>
    <div className={"flex mbm cm4 relative justify-end " + (width > 800 ? ' flex-row ' : ' flex-col ')}>
        {width > 1500 ? <motion.div 
            style={{
                position: width > 800 ? "absolute" : "relative",
                top: pinBox && width > 800 ? boxY2desk : "auto",
                bottom: pinBox && width > 800 ? "auto" : 0,
                left: "0%",
            }}
            className="cd4 cm4">
            <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay='0.3'
                className="card fadeinup delay-1">
                <div className="img-wrapper mbs">
                    {imagesURL[2] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[2]}  alt={''} loading='lazy'/>}
                </div> 
                <h2 className='mbs'>{title3}</h2>
                <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
            </Fade>
        </motion.div> : <motion.div 
            style={{
                position: width > 800 ? "absolute" : "relative",
                top: pinBox && width > 800 ? boxY2 : "auto",
                bottom: pinBox && width > 800 ? "auto" : 0,
                left: "0%",
            }}
            className="cd4 cm4">
            <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay='0.3'
                className="card fadeinup delay-1">
                <div className="img-wrapper mbs">
                    {imagesURL[2] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[2]}  alt={''} loading='lazy'/>}
                </div> 
                <h2 className='mbs'>{title3}</h2>
                <p dangerouslySetInnerHTML={{ __html: description3 }}></p>
            </Fade>
        </motion.div>}
        <Fade
            threshold='0'
            duration='.25'
            from={0}
            to={1}
            delay='0.5'
            className="card cd8 cm4 fadeinup delay-1">
            <div className="img-wrapper mbs">
                {imagesURL[3] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[3]}  alt={''} loading='lazy'/>}
            </div> 
            <h2 className='mbs'>{title4}</h2>
            <p dangerouslySetInnerHTML={{ __html: description4 }}></p>
        </Fade>


    </div>
    <div className={"flex mbm cm4 relative" + (width > 800 ? ' flex-row ' : ' flex-col ')}>
        <Fade
            threshold='0'
            duration='.25'
            from={0}
            to={1}
            delay='0.3'
            className="card cd8 cm4 fadeinup delay-1">
            <div className="img-wrapper mbs">
                {imagesURL[4] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[4]}  alt={''} loading='lazy'/>}
            </div> 
            <h2 className='mbs'>{title5}</h2>
            <p dangerouslySetInnerHTML={{ __html: description5 }}></p>
        </Fade>
        {width > 1500 ?  <motion.div 
            className="cd4 cm4 ">
            <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay='0.5'
                className="card ">
                <div className="img-wrapper mbs">
                    {imagesURL[5] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[5]}  alt={''} loading='lazy'/>}
                </div> 
                <h2 className='mbs'>{title6}</h2>
                <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
            </Fade>
        </motion.div> : <motion.div 
            style={{
                position: width > 800 ? "absolute" : "relative",
                top: pinBox && width > 800 ? boxY3 : "auto",
                bottom: pinBox && width > 800 ? "auto" : 0,
                right: "0%",
            }}
            className="cd4 cm4 ">
            <Fade
                threshold='0'
                duration='.25'
                from={0}
                to={1}
                delay='0.5'
                className="card ">
                <div className="img-wrapper mbs">
                    {imagesURL[5] && <Image quality={100} width={2000} height={2000} className={'photo'} src={imagesURL[5]}  alt={''} loading='lazy'/>}
                </div> 
                <h2 className='mbs'>{title6}</h2>
                <p dangerouslySetInnerHTML={{ __html: description6 }}></p>
            </Fade>
        </motion.div> }


    </div>
    <div className="lines_v">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>
        <div className="line line-6"></div>
    </div>
</section>
  )
}

export default Spa
