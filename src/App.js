import React, { Component } from 'react';

import './App.css';
import Summary from './Summary/Summary';
import Form from './Features/Form';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
 
  const FEATURES = {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200
        }
      ],
      "Operating System": [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        {
          name: 'Bodhi Linux',
          cost: 300
        }
      ],
      "Video Card": [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345
        }
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400
        },
      ]
    };

  class App extends Component {

    state = {
      selected: {
        'Processor': {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        'Display': {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  
    updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      };

    render() {
   
      return (
        <div className="App">
          <header>
            <h1>ELF Computing | Laptops</h1>
          </header>
          <main>
           <Form
              features={FEATURES}
              costFormat={USCurrencyFormat} 
              updateChange={this.updateFeature}
              selected = {this.state.selected} 
            />
           <Summary
              selectedFeatures={this.state.selected}
              costFormat={USCurrencyFormat} 
            /> 
          </main>
        </div>
      );
    }
  }
  
App.defaultProps = {
  features: FEATURES
}

export default App;
