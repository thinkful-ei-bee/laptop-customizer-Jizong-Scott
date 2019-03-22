import React from 'react'
import '../App.css';
class FeatureItem extends React.Component{
  
  render(){
  const selectedClass = this.props.item.name === this.props.selected[this.props.keyData].name ? 'feature__selected' : '';
  const featureClass = 'feature__option ' + selectedClass;
    console.log('test props featureitem',this.props.item.name)  
    console.log('test',this.props.selected[this.props.keyData].name)
    return(
      
       <li key={this.props.index} className="feature__item">
        <div className= {featureClass}
          
          onClick={e => this.props.updateFeature(this.props.index, this.props.item)}>
            { this.props.item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(this.props.item.cost) })
        </div>
      </li>

    )
  }
}





  export default FeatureItem