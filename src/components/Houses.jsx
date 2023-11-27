import React, { useContext } from 'react'
import { AllContexts } from '@/components/context/Context'
import AutoSlider from './atoms/AutoSlider'
import useWindowDimensions from './hooks/useWindowDimensions'
import Fade from '@/components/animations/Fade'

const Houses = (props) => {


  const { leftText, rightText, btnText, projectItems } = props.props

  const { setCurrentProject } = useContext(AllContexts)

  const [width] = useWindowDimensions()

  function scrollTo (block) {
    document.getElementById(block).scrollIntoView({ block: 'start' });
    width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);
  }


  const spliceProject = (el, _) => {  
    setCurrentProject([el])
}

  return (
    <section className='houses container' id="projects">
      <div className={"top flex cd12 mbm" + (width > 800 ? ' flex-row ' : ' flex-col ')}>
          <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay='0'
              className={"cd6 cm4 " + (width > 800 ? ' pl0 ' : ' mb ')}
            > 
            <p dangerouslySetInnerHTML={{ __html: leftText }}></p>
          </Fade> 
          <Fade
              threshold='0'
              duration='.25'
              from={0}
              to={1}
              delay='0.3'
              className={"cd6 cm4 " + (width > 800 ? ' pr0 ' : ' ')}
            > 
            <p dangerouslySetInnerHTML={{ __html: rightText }}></p>
          </Fade>
      </div>
      <div className="bottom flex flex-row flex-wrap cd12">
          {projectItems?.map((p, i) => {
              return <Fade                         
                        threshold='0'
                        duration='.25'
                        from={0}
                        to={1}
                        delay={0.25 * i + 0.1} 
                        key={i} className={"flex flex-col cd6 cm4 houseItem mbm" + (i % 2 === 0 ? ' pl0 ' : ' pr0 ')}>
                  <div className="houses">
                    <AutoSlider 
                      cl="usual houses"
                      images={p?.projectImages}
                    />                  
                  </div>
                  <div className="title">
                      <h2 className='mt'>{p?.title}</h2>
                  </div>
                  <div className="commonPars flex flex-col mb">
                      {p?.CommonPars?.map((c, i) => {
                          return <p className='mbs' key={i}>– {c.text}</p>
                      })}
                  </div>
                  <div className="optionalPars flex flex-col mb">
                      {p?.OptionalPars?.map((c, i) => {
                          return <p className='mbs' key={i}>– {c.text}</p>
                      })}
                  </div>
                  <p className='mbm'>{ p?.price }</p>
                  <div class="fixed_phone">
                      <div onClick={() => {spliceProject(p); scrollTo("form")}}><a>{btnText}</a></div>
                  </div>
              </Fade>
          })}
      </div>
    </section>
  )
}


export default Houses

