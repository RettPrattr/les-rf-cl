import useWindowDimensions from '../hooks/useWindowDimensions'
import Image from 'next/image'
import Flickity from 'react-flickity-component'
import findImageUrl from '../utils/findImageUrl'
import React from 'react';


export default function AutoSlider (props) {

    const { cl, images, maxQuality } = props

    const [width, height] = useWindowDimensions();

    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,
    }

    return (
        <section className={'AutoSlider AutoSlider-' + cl}>      
                
            {images?.data?.length === 1 ? <div className='flex flex-row'>
                            <div className="w-full">
                                <Image
                                    className='photo'
                                    src={findImageUrl(images, 'url', maxQuality)}                                    
                                    width={700}
                                    height={400}
                                    quality={100}
                                    alt={''}
                                    loading='lazy'
                                />
                            </div>
                        </div> : 
                        <Flickity
                            className={'carousel relative'}
                            elementType={'div'}
                            options={flickityOptions}
                            disableImagesLoaded={false}
                            reloadOnUpdate={true}
                        >
                        {images?.data?.map((s, i) => {
                            return (
                                    <div key={i} className={'flex slider w-full items-center justify-center' + (width > 800 ? ' flex-row' : ' flex-col')}>
                                        <div className="con">
                                            <Image
                                                className='photo'
                                                src={findImageUrl(s, 'url', maxQuality)}                                      
                                                width={700}
                                                height={400}
                                                quality={100}
                                                alt={''}
                                                loading='lazy'
                                            />
                                        </div>
                                    </div>
                            )
                        })}
                        </Flickity>
            }
        </section>
    )
}