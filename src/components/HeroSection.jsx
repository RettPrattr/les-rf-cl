import useWindowDimensions from './hooks/useWindowDimensions'
import { React, useRef } from 'react'
import Image from 'next/image'
import AutoSlider from '../components/atoms/AutoSlider'
import Translate from '@/components/animations/Translate'
import Fade from '@/components/animations/Fade'
import { motion, useScroll, useTransform } from "framer-motion";


const HeroSection = (props) => {

    const { saleText1, saleText2, saleText3, leftText, rightText, images } = props.props

    const [width] = useWindowDimensions()

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
        triggerOnce: false
    })

    const scale = useTransform(scrollYProgress, [0.1, 1], [.8, 1]);


  return (
    <section className='heroSection flex flex-col'>

        <div className="sale row flex flex-col">
        <Translate
                fromX="0"
                toX="0"
                fromY="25%"
                toY="0"
                duration=".25"
                delay='0'
                threshold='0'
              >
                  <Fade
                    threshold='0'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0'
                  >
            <h2 dangerouslySetInnerHTML={{ __html: saleText1 }} className="super boxed"></h2>
            </Fade>
        </Translate>
        <Translate
                fromX="0"
                toX="0"
                fromY="25%"
                toY="0"
                duration=".25"
                delay='0.06'
                threshold='0'
              >
                  <Fade
                    threshold='0'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.06'
                  >
            <h3 dangerouslySetInnerHTML={{ __html: saleText2 }} className="anim-up delay-4"></h3>
            </Fade>
        </Translate>
        <Translate
                fromX="0"
                toX="0"
                fromY="25%"
                toY="0"
                duration=".25"
                delay='0.12'
                threshold='0'
              >
                  <Fade
                    threshold='0'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.12'
                  >
            <h3 dangerouslySetInnerHTML={{ __html: saleText3 }} className="anim-up delay-4"></h3>
            </Fade>
        </Translate>
        </div>
        <motion.div
            ref={ref}
            transition={{
                ease: "easeInOut",
                duration: 5
            }}
            style={{ scale: scale }}
        >
            <AutoSlider 
              cl='hero'
              images={images}
              maxQuality={width > 800 ? true: false}
            />
        </motion.div>
          <div id='poselok' class="row sides center">
          <Translate
                fromX="0"
                toX="0"
                fromY="25%"
                toY="0"
                duration=".25"
                delay='0.12'
                threshold='1'
              >
                  <Fade
                    threshold='1'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.12'
                    className="center super"
                    id="poselok"
                  >
                        <Image quality={100} width={1000} height={1000} className={''} src={'/images/logo2.svg'} alt={''}></Image>         
                </Fade>
            </Translate>
                <Fade
                    threshold='0.8'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.3'
                    className="marquee-container "
                  >
                  <p class="marquee">ПАРК - СПА - ФИТНЕС - РЕСТОРАН - ДЕТСКИЕ
                  ПЛОЩАДКИ - КРУГЛОСУТОЧНАЯ ОХРАНА -&nbsp;</p>            
                </Fade>

              <div className={"flex" + (width > 800 ? ' flex-row justify-center ' : ' flex-col items-center ')}>
              <Fade
                    threshold='0.8'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.7'
                    className="cd4 cm4 mt "
                  >
                      <p dangerouslySetInnerHTML={{ __html: leftText }} className='small-parts'></p>          
                </Fade>
                <div className="cd1"></div>
                <Fade
                    threshold='0.8'
                    duration='.25'
                    from={0}
                    to={1}
                    delay='0.8'
                    className="cd4 cm4 mt "
                  >
                      <p dangerouslySetInnerHTML={{ __html: rightText }} className='small-parts'></p>          
                </Fade>
              </div>
          </div>
    </section>
  )
}

export default HeroSection
