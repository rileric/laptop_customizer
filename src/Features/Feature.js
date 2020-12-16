import React from 'react';
import FeatureItem from './FeatureItem';
import './Feature.css';

export default class Feature extends React.Component {

    render(props) {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            // Feature
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <FeatureItem
                     feature={this.props.features[feature]}
                     featureName={feature}
                     costFormat={this.props.costFormat} 
                     updateChange={this.props.updateChange}
                     selected = {this.props.selected} 
                />
              </fieldset>
            );
      });

        return features;
    }
}