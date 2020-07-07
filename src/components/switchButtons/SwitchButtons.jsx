import React, {useState} from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import './SwitchButtons.css';

const SwitchButtons = () => {

    return (
        <div className='switch-buttons'>
            <ToggleButtonGroup onChange={() => {
                console.log('sdfd')}}>
                <ToggleButton>
                    <ViewModuleIcon />
                    <ViewStreamIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>);
};

export default SwitchButtons;
