import React from 'react'
import Sentimentbar from './Sentimentbar'
import { useLocation } from 'react-router-dom';

function Sentiment({analysis}) {
 // Access sentiresponse from the state

  console.log(analysis); 
  const filteredAnalysis = analysis.filter(elem => 
    elem.sentiment === "Bad" || elem.sentiment === "Hatred"
);
  return (
    <div className='h-full px-[3vw] w-full flex flex-col overflow-auto gap-[0.6vw]'>
        <h1 className='text-[1.9vw] mb-[0.5vw] font-[800]'>Here are the harmful posts for this user  : </h1>
        {filteredAnalysis.map((elem, index) => (
                <Sentimentbar key={index}  sentiment={elem} />
                
            ))}
    </div>
  )
}

export default Sentiment