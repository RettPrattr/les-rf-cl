import React from 'react'
import Image from 'next/image'
import useWindowDimensions from './hooks/useWindowDimensions'
import Link from 'next/link'

const Docs = () => {

    const [width] = useWindowDimensions()

  return (
    <section className="docs container" id="docs">
        <div className="flex flex-col w-full">
            <h2 className="cd12 cm4">Информация</h2>
            <h3 className="cd12 cm4">Посмотреть документацию посёлка по ссылкам ниже</h3>
            <div className={"flex row-links flex-wrap" + (width > 800 ? ' flex-row ' : ' flex-col ')}>
                <Link href="docs/ТУ_для_присоединения_к_электрическим_сетям.pdf" className={"cd3 cm4 pr0 flex flex-col" + (width > 800 ? ' ' : ' docCard')} target='_blank'>
                    <div className='mb'><Image quality={100} width={1000} height={1000} src={'/images/doc1.png'} alt={''} loading='lazy'/></div>
                    <p>ТУ для присоединения к электрическим сетям</p>
                </Link>
                <Link href="docs/ТУ_на_подключение_к_централизованной_системе_водоотведения.pdf" className={"cd3 cm4 pr0 flex flex-col" + (width > 800 ? ' ' : ' docCard')} target='_blank'>
                    <div className='mb'><Image quality={100} width={1000} height={1000} src={'/images/doc2.png'} alt={''} loading='lazy'/></div>
                    <p>ТУ на подключение к централизованной системе водоотведения</p>
                </Link>
                <Link href="docs/ТУ_на_подключение_к_централизованной_системе_водоснабжения.pdf" className={"cd3 cm4 pr0 flex flex-col" + (width > 800 ? ' ' : ' docCard')} target='_blank'>
                    <div className='mb'><Image quality={100} width={1000} height={1000} src={'/images/doc3.png'} alt={''} loading='lazy'/></div>
                    <p >ТУ на подключение к централизованной системе водоснабжения</p>
                </Link>
                <Link href="docs/ТУ_на_подключение_объектов_капитального_строительства_к_сетям_г.pdf" className={"cd3 cm4 pr0 flex flex-col" + (width > 800 ? ' ' : ' docCard')} target='_blank'>
                    <div className='mb'><Image quality={100} width={1000} height={1000} src={'/images/doc4.png'} alt={''} loading='lazy'/></div>
                    <p >ТУ на подключение объектов капитального строительства к сетям</p>
                </Link>
            </div>

            {/* <div className={"flex row-links" + (width > 800 ? ' flex-row mt ' : ' flex-col ')}>
                <Link href="docs/условия_акции_ЛЕТО.pdf" className={"cd3 cm4 pr0 flex flex-col" + (width > 800 ? ' ' : ' docCard')} target='_blank'>
                    <div className='mb'><Image quality={100} width={1000} height={1000} src={'/images/doc5.png'} alt={''} loading='lazy'/></div>
                    <p >Условия акции &#34;Лето&#34;</p>
                </Link>
            </div> */}
            
        </div>
    </section>
  )
}

export default Docs
