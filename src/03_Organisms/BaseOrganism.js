
import React, { Component } from 'react';
import SliderPercent from '../01_Atoms/SliderPercent';
import SliderNicotineInput from '../01_Atoms/SliderNicotineInput';

class BaseOrganism extends Component {
    render() {
        return (
            <div>
                <h2>Основа</h2>
                <div style={{
                    height: '16px'
                }}></div>
                <h4>Никотин</h4>
                <SliderNicotineInput />
                <h4>PG</h4>
                <SliderPercent defaultValue={100} />
                <h4>VG</h4>
                <SliderPercent defaultValue={0} />
                <div style={{
                    height: '24px'
                }}></div>
            </div>
        )
    };
};

export default BaseOrganism;