import React from 'react';
import './SummaryOption.css';

export default class SummaryOption extends React.Component {

 

    render() {
        const summary = Object.keys(this.props.selectedFeatures).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    const selectedOption = this.props.selectedFeatures[feature];
                    return (
                      <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                          {this.props.costFormat.format(selectedOption.cost)}
                        </div>
                      </div>
                    );
                  });

        return summary;
    }
}