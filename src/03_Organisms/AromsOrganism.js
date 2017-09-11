import React, {Component} from 'react';
import SliderAroms from '../01_Atoms/SliderAroms';

class AromsOrganism extends Component {
    render() {
        return (
            <div>
                <h2>Ароматизаторы</h2>
                <div style={{
                    height: '16px'
                }}></div>
                <SliderAroms
                    aromsPercent={this.props.aromsPercent}
                    handleChangeAromsPercent={this.props.handleChangeAromsPercent}/>
            </div>
        )
    };
};

export default AromsOrganism;