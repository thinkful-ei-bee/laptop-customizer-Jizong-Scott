import React from 'react';
import Features from './Features';
import Summary from './Summary';

export default function Main(props) {
  return (
    <main>


      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>

        <Features 
          features={props.features} 
          updateFeature={props.updateFeature} 
          selected={props.selected}
        />

      </section>


      
      <Summary selected={props.selected}/>

          
    </main>

  )
}
