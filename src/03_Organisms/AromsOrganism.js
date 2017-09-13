import React, {Component} from 'react';
import SliderAroms from '../01_Atoms/SliderAroms';
import DynamicAromsMolecule from '../03_Organisms/DynamicAromsMolecule';
import AromsModalMolecule from '../03_Organisms/AromsModalMolecule';
import { Button } from 'antd';

class AromsOrganism extends Component {
    handleClick = () => {
        
    }

    render() {
        return (
            <div>
                <h2>Ароматизаторы</h2>

                <div style={{height: '16px'}}></div>

                <SliderAroms
                    aromsPercent={this.props.aromsPercent}
                    handleChangeAromsPercent={this.props.handleChangeAromsPercent}
                />

                <div style={{height: '16px'}}></div>

                <Button type="dashed" size="large" icon="plus" onClick={this.handleClick}>Добавить роматизатор</Button>

                <div style={{height: '16px'}}></div>

                <DynamicAromsMolecule/>

                <div style={{height: '16px'}}></div>

                <AromsModalMolecule />
            </div>
        )
    };
};

export default AromsOrganism;