import React from 'react';
import FeatureTypes from './FeatureTypes';

export default function Features(props) {
  
  
  // return(

  //   Object.keys(props.features)
  //   .map(key => 

  //   <FeatureTypes 
  //     key = {key}
  //     features = {props.features}
  //     id = {key}
  //     updateFeature = {props.updateFeature}
  //     selected = {props.selected}
  //   />
      
  //   )     

  // )
  return(

    Object.keys(props.features)
    .map(key => 

    <div className="feature" key={key}>
      <div className="feature__name">{key}</div>
      <ul className="feature__list">

      <FeatureTypes 
      key = {key}
      features = {props.features}
      id = {key}
      updateFeature = {props.updateFeature}
      selected = {props.selected}
      />

      </ul>
    </div>
      
    )     

  )
}

// const options = props.features[key].map((item, index) => {
//   const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
//   const featureClass = 'feature__option ' + selectedClass;
//   return <li key={index} className="feature__item">
//     <div className={featureClass}
      
//       onClick={e => props.updateFeature(key, item)}>
//         { item.name }
//         ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
//           .format(item.cost) })
//     </div>
//   </li>
// });

// return <div className="feature" key={key}>
//   <div className="feature__name">{key}</div>
//   <ul className="feature__list">
//     { options }
//   </ul>
// </div>