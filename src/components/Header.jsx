import useWindowDimensions from './hooks/useWindowDimensions'
import { React, useState } from 'react'
import Image from 'next/image'
import findImageUrl from './utils/findImageUrl'

import Link from 'next/link'

export default function Header (props) {

    const { headerLinks, btnNumber, logo } = props.props

    const [width] = useWindowDimensions()

    const [toggleBurger, setToggleBurger] = useState(false)

    function scrollTo (block) {
      document.getElementById(block).scrollIntoView({ block: 'start' });
      width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);
    }

    if (width) {
      return (<>
        {width > 800 ? '' : <div class="fixed_phone">
        <div class=""><a href="tel:+78001018787">{btnNumber}</a></div>
        </div>}
        <section className={"header  cd12 cm4" + (toggleBurger ? ' opened ' : ' ')}>
            <div className={"flex w-full" + (width > 800 ? ' flex-row justify-between items-center ' : ' flex-col justify-start items-start ')}>
              <div className={"logoAndBurger flex flex-row items-center justify-between" + (width > 800 ? ' ' : ' w-full ')}>
                <div className="logo">
                  <Link href="/" className="scroll">
                    <Image quality={100} width={1000} height={1000} className={''} src={findImageUrl(logo?.data?.attributes, 'url')}  alt={''} loading='lazy'/>
                  </Link>
                  </div>
                {width > 800 ? ' ' : <div onClick={() => setToggleBurger(!toggleBurger)} className="menu-icon only-mobile relative">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                </div>}
              </div>
                <div className={"menu-items flex" + (width > 800 ? ' flex-row' : ' flex-col items-start ' )}>
                    {headerLinks?.map((h, i) => {
                      return <a key={i} className="scroll" onClick={() => scrollTo(h.link)}>{h.text}</a>                
                    })}
                </div>
              <div className={"right flex " + (width > 800 ? ' items-center justify-end ' : ' item-start ')}>
                {width > 800 ? <div class="phone no-mobile"><a href="tel:+78001018787">{btnNumber}</a></div> : ''}
              </div>
            </div>
                {/* {width > 800 ? '' : <div class="fixed_phone">
                  <div class=""><a href="tel:+78001018787">{btnNumber}</a></div>
              </div>} */}
        </section>
        </>
      )
    }



}