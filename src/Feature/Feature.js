import React from 'react'
import FeatureItem from './FeatureItem'
import '../App.css';
//const features = Object.keys(this.props.features)
  //        .map(key =>


  class Feature extends React.Component{
    
    

    render(){

    console.log('test function',this.props) 
//   console.log(this.props.keyData)

      return(

        <div className="feature" key={this.props.key}>
              <div className="feature__name">{this.props.key}</div>
              <ul className="feature__list">
                {this.props.features[this.props.keyData].map((item, index) =>
                <FeatureItem keyData = {this.props.keyData} updateFeature={this.props.updateFeature} selected={this.props.selected} item = {item} features={this.props.features} index={index}/>)}                 
              </ul>
            </div>

      )
    }

  }

  export default Feature



            
        