import React from 'react';

export default function FeatureTypes(props) {


  const options = props.features[props.id].map((item, index) => {
    const selectedClass = item.name === props.selected[props.id].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    return <li key={index} className="feature__item">
      <div className={featureClass}
        
        onClick={e => props.updateFeature(props.id, item)}>
          { item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(item.cost) })
      </div>
    </li>
  });


  return (
    
   <div className="feature" key={props.id}>
      <div className="feature__name">{props.id}</div>
      <ul className="feature__list">
        { options }
      </ul>
    </div>
  )
}