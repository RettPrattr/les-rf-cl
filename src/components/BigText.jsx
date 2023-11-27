import React from 'react';
import useWindowDimensions from './hooks/useWindowDimensions'

const BigText = (props) => {

    const [width, height] = useWindowDimensions()

    const email = 'lec.kotovo@mail.ru'

    const phoneNumber = '+7 800 101 87 87'

    const town1 = 'Московская область,'
    const town2 = 'деревня Котово'


    return (
        <section id='contacts' className={'bigText bc-fill flex flex-row'}>
            <div className="container flex flex-col">
                <div className={"flex space-between mx0 mb0 mys p0" + (width > 800 ? ' flex-row ' : ' flex-col ')}>
                    <div className={"flex left flex-col cd6 cm4" + (width > 800 ? ' ' : ' mb')}>
                        <a className={width > 800 ? "mb" : 'mbs'} href={"mailto:" + email}>{email}</a>
                        <a className="mb0" href={"tel:" + phoneNumber}>{phoneNumber}</a>
                    </div>
                    <div className="flex right flex-col cd6 cm4">
                        <p className={width > 800 ? "mb" : 'mbs'}>{town1}</p>
                        <p className="mb0 town">{town2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BigText