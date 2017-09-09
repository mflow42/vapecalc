
import React, { Component } from 'react';
import SliderPercent from '../01_Atoms/SliderPercent';
import SliderNicotineOutput from '../01_Atoms/SliderNicotineOutput';

class DesiredOrganism extends Component {
    render() {
        return (
            <div>
                <h2>Ожидаемый результат</h2>
                <div style={{ height: '16px' }}></div>
                <h3>Никотин</h3>
                <SliderNicotineOutput onChange={value => this.setState({ nicotine: value })} />
                <h3>PG</h3>
                <SliderPercent defaultValue={30} />
                <h3>VG</h3>
                <SliderPercent defaultValue={70} />
                <div style={{ height: '24px' }}></div>
            </div>
        )
    };
};

export default DesiredOrganism;