import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useViewportScroll, useTransform } from "framer-motion";

const FadeInSD = (props) => {

    const ref = useRef(null);


    const { from, to, translateX, translateY, className, threshold, leftToRight, topToBottom} = props


    // const { ref, inView, entry } = useInView({
    //     threshold: threshold,
    //     triggerOnce: true,
    //   })


    /// framer hook for scroll-dependent animation

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start end", "end end"]
    })

    // translateX ? styleX = leftToRight + 100 - scrollYProgress : ''
    // translateY ? styleY = topToBottom + 100 - scrollYProgress : ''


    // const style = {
    //     x: `${styleX}%`,
    //     y: `${styleY}%`
    // }


    const opacity = useTransform(scrollYProgress, [0.6, 0.8], [from, to]);


    // style={{ scaleX: scrollYProgress }}





  return (
        <motion.div
                ref={ref} 
                className={className}
                // animate={inView ? animate : initial}
                transition={{
                    ease: "easeInOut",
                    duration: 5
                }}
                style={{ opacity: opacity }}
            >
                {props.children}
        </motion.div>

  )
}

export default FadeInSD
