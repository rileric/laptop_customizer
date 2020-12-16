import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class FeatureItem extends React.Component {

    render(props) {
        const options = this.props.feature.map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(this.props.featureName)}
                checked={item.name === this.props.selected[this.props.featureName].name}
                onChange={() => this.props.updateChange(this.props.featureName, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({this.props.costFormat.format(item.cost)})
              </label>
            </div>
          );
        });

        return options;
    }
}

FeatureItem.defaultProps = {
    TestFeature: {
        name: 'Test Name',
        cost: 1234.56
      }
}