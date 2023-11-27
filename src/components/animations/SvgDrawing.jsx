import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useViewportScroll, useTransform } from "framer-motion";

const SvgDrawing = (props) => {

    const { className, threshold } = props


    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref})
    // const { scrollYProgress } = useViewportScroll({container: ref});

    // let initial;
    // let animate;

    /// children
    /// direction: x / y
    /// from: initial value
    /// to: animate value
    /// delay
    /// duration
    /// className: optional
    /// threshold: Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to create multiple trigger points.



    // const { ref, inView, entry } = useInView({
    //     threshold: threshold,
    //     triggerOnce: true,
    //   })

    const drawing = useTransform(scrollYProgress, [0, 1], [1, 0]);


    useEffect(() => {
        console.log(scrollYProgress.current, typeof scrollYProgress, "SCROLL Y changed")
    }, [scrollYProgress.current])



  return (
        <motion.div
                ref={ref} 
                className={className}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            >
                {/* <svg width="452" height="325" viewBox="0 0 452 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path d="M41.5005 8.50089C41.5005 8.50089 110 77.0009 393.5 8.50089C677 -59.9991 -194 369.501 41.5005 320.001C277 270.5 393.5 320.001 393.5 320.001" stroke="black"/>
                </svg> */}
                <svg width="432" height="347" viewBox="0 0 432 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path style={{ pathLength: drawing }} d="M422.5 343C422.5 343 159.5 293.5 21 343C-117.5 392.5 508 -138 422.5 36.5C337 211 21 36.5 21 36.5" stroke="black"/>
                </svg>


                {/* <svg width="186" height="101" viewBox="0 0 186 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.line style={{ pathLength: scrollYProgress }} x1="0.932682" y1="2.23079" x2="184.933" y2="99.2308" stroke="#545454" stroke-width="4" pathLength="1"/>
                </svg> */}
        </motion.div>

  )
}

export default SvgDrawing
