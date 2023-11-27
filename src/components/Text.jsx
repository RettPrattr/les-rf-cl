import React from 'react';

function Text(props) {

    const { type, title, subtitle, text1, text2 } = props

    // TYPE 1
    if ( type === 1 ) {
        return (
            <section className={'text text-1 flex flex-col'}>
                <div className="container text justify-between">
                    <div className="cd8 cm4 mbs">
                        <h4>{subtitle}</h4>
                        <h2>{title}</h2>
                    </div>
                    <div className="cd6 cm4 flex-col">
                        <p 
                            className=""
                            dangerouslySetInnerHTML={{ __html: text1 }}>
                        </p>
                    </div>
                    <div className="cd6 cm4 flex-col">
                        <p 
                            className=""
                            dangerouslySetInnerHTML={{ __html: text2 }}>
                        </p>
                    </div>
                </div>
            </section>
        )
    } else if ( type === 2) {
        return (
            <section className={'text text-1 flex flex-col'}>
                <div className="container text justify-between">
                    <div className="cd12 title">
                        {title}
                    </div>
                </div>
            </section>
        )
    }
}

export default Text