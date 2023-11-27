import React, {useEffect, useState, useContext } from 'react'
import { AllContexts } from '@/components/context/Context'
import findObjectByValue from '@/components/utils/findObjectByValue'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import axios from 'axios'


const Map = () => {

    const [ panelIsShow, setPanelShow ] = useState(false)

    const [svg, setSvg] = useState(null)
    const [number, setNumber] = useState(null)

    const [square, setSquare] = useState(null)
    const [availability, setAvailability] = useState(null)

    const [landData, setLandData] = useState(null)

    const [width] = useWindowDimensions()

    const [svgURL, setSvgURL] = useState()
    const [imageURL, setImageURL] = useState()

    const [price, setPrice] = useState()

    useEffect(() => {
        (async () => {
        axios.get(`${process.env.API_LINK}/api/land?populate=deep`)
            .then((res) =>  {
                let imageURL = res?.data?.data?.attributes?.mapBack?.data?.attributes
                if (imageURL?.formats?.medium?.url && width < 800) {imageURL = res?.data?.data?.attributes?.mapBack?.data?.attributes.formats?.medium?.url} 
                else { imageURL = imageURL.url}
                setImageURL(`${process.env.API_LINK}${imageURL}`)
                setSvgURL(`${process.env.API_LINK}${res?.data?.data?.attributes?.mapSVG?.data?.attributes?.url}`)
                setLandData(res?.data?.data?.attributes?.landInfo)})
            .catch((err) => console.error(err))
        })()
    }, [setLandData, width])

    const { setCurrentLand } = useContext(AllContexts)

    function scrollTo (block) {
        document.getElementById(block).scrollIntoView({ block: 'start' });
        width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);
      }

    const spliceLand = (el) => {  
        setCurrentLand([el])
    }

    useEffect(() => {
      landData?.map(i => {
            i.status == 'booked' && document.querySelector('#_' + i.number)?.classList.add('booked')
            i.status == 'sold' && document.querySelector('#_' + i.number)?.classList.add('unavailable')
      })
    })

    useEffect(() => {
        var map = document.querySelector('.map')
        map.addEventListener('click', function(e){
            if ( e.target.localName === 'path' ) {
                setPanelShow(true)
                document.querySelector('.active') && document.querySelector('.active').classList.toggle('active')
                setNumber(e.target.id.substring(1))
                e.target.classList.toggle('active')
                var active = document.querySelector('path.active')
                var obj;
                obj = findObjectByValue(landData, 'number', active.id.substring(1))
                if (obj?.status === "sold") {
                    setAvailability("Продан")
                } else if (obj?.status === "available") {
                    setAvailability("Доступен")
                } else {
                    setAvailability("Забронирован")
                }
                obj && setSquare(obj?.square)
                obj && setPrice(obj?.cost)
                obj && spliceLand(obj)
            }
        }, false)
    }, [landData])


    useEffect(() => {
        if (svgURL !== 'http://api.cashdash.ruundefined') {
            fetch(svgURL)
            .then(response => response.text())
            .then(str => {
                let imageStr = `
                <g id="Layer_3" data-name="Layer 3">
                    <image width="2342" height="1372" transform="scale(1.65)" xlink:href="${imageURL}"/>
                </g>`

                let index = str.indexOf('<g id="Layer_1" data-name="Layer 1">')

                if (index !== -1) {
                    setSvg(str.substring(0, index) + imageStr + str.substring(index))
                }
            })
        }
    }, [imageURL, svgURL])


    return (
        <div id="map" className='map'>
            <p>
            </p>
            <div className="overlay flex flex-row items-center justify-center absolute z-100 w-fill">
                <h2>Выберите участок</h2>
            </div>
            <div class="map_wrapper">
                <div class="map_inner map_con">
                {
                    <div dangerouslySetInnerHTML={{__html: svg}}/>
                }
                </div>
            </div>
            {panelIsShow &&  <div class="info white flex flex-row">
                <div class="number flex flex-row "><h3>Участок <b id="obj-number">№{number}</b></h3>
                    <div class="status allowed"><i data-eva="close-outline"></i> <i data-eva="checkmark-outline"></i>
                        <p>{availability}</p></div>
                </div>
                <p>
                    <b>Площадь:&nbsp;</b><span id="obj-size">{square}</span> соток &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p><b>Стоимость:&nbsp;</b><span id="obj-size">{price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span> рублей &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <div class={"buttons flex flex-wrap" + (width > 800 ? ' ' : ' mb ')}>
                    <div onClick={() => scrollTo("projects")} class="btn gold"><a class="scroll" href="#houses">Выбрать проект дома</a></div>
                    <div onClick={() => scrollTo("form")} class="btn gold"><a class="scroll" href="#write">Записаться на просмотр</a></div>
                </div>
            </div>}
        </div>
    )
}

export default Map
