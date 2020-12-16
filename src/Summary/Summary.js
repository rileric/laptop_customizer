import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal';

export default class Summary extends React.Component {     

    render() {

        return (
            <section className="main__summary">
                <SummaryOption 
                    selectedFeatures={this.props.selectedFeatures}
                    costFormat={this.props.costFormat} 
                />     
                <SummaryTotal
                     selectedFeatures={this.props.selectedFeatures}
                     costFormat={this.props.costFormat} 
                />
            </section>
        );
    }
}

Summary.defaultProps = {
    selectedFeatures: 0,
}