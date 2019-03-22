import React from 'react'
import '../App.css'


class Summary extends React.Component{
  render(){
    return(
  <div className="summary__option" key={this.props.keyData}>
  <div className="summary__option__label">{this.props.keyData}  </div>
  <div className="summary__option__value">{this.props.selected[this.props.keyData].name}</div>
  <div className="summary__option__cost">
    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(this.props.selected[this.props.keyData].cost) }
  </div>
</div>)
    
  }
}

export default Summary

 