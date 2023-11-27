import useWindowDimensions from './hooks/useWindowDimensions'
import findImageUrl from './utils/findImageUrl'
import Image from 'next/image'


export default function Characteristics (props) {

    const { title, subtitle, CharacteristicsCards } = props.props

    const [width] = useWindowDimensions()

    return (
        <section className="characteristics-cards flex justify-center items-center w-full flex-col container mym">
            <div className="texts flex flex-col w-full justify-center items-center">
                <h2 className='mb text-center'>{title}</h2>
                <h4 className='mb text-center'>{subtitle}</h4>
            </div>
            <div className="flex flex-row justify-between flex-wrap">
                {CharacteristicsCards?.map((c, i) => 
                    {
                        return  <div key={i} className={"cd4 cm2 flex characteristics-card h-auto flex-col items-center justify-center" + (width > 800 ? ' mys' : ' mys')}>
                                    <div className="cardImage">
                                        <Image quality={100} width={1000} height={1000} src={findImageUrl(c.image, 'url')} alt={''} loading='lazy'/>
                                    </div>
                                    <p className='text-center'>{c.description}</p>
                    </div>
                    }
                )}
            </div>
        </section>
    )
}


