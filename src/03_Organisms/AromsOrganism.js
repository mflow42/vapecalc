
import React, { Component } from 'react';
import SliderAroms from '../01_Atoms/SliderAroms';

class AromsOrganism extends Component {
    render() {
        return (
            <div>
                <h2>Ароматизаторы</h2>
                <div style={{ height: '16px' }}></div>
                <SliderAroms />
                <div style={{ height: '24px' }}></div>
            </div>
        )
    };
};

export default AromsOrganism;