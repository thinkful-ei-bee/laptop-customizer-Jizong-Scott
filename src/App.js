import React, { Component } from 'react';
import './App.css';
import Feature from './Feature/Feature'
import Summary from './Summary/Summary'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature=(feature, newValue)=> {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
   

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    

    
    
    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
          
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { Object.keys(this.props.features)
          .map(key =><Feature 
            updateFeature={this.updateFeature} 
            selected = {this.state.selected} 
            features = {this.props.features} 
            keyData={key} /> )}
          </section>


          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {Object.keys(this.state.selected)
            .map(key =><Summary keyData={key} selected = {this.state.selected}/>)}
            
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
