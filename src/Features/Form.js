import React from 'react';
import Feature from './Feature';

export default class Form extends React.Component {

    render() {
        return (
            <form className="main__form">
              <h2>Customize your laptop</h2>
              <Feature
                features={this.props.features}
                costFormat={this.props.costFormat} 
                updateChange={this.props.updateChange}
                selected = {this.props.selected} 
                />
            </form>
        );
    }
}