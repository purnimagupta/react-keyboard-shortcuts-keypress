import React from 'react';
import styled from 'styled-components';
import { withKeyboardShortcuts } from '../lib/withKeyboardShortcuts';
import { capitalizeFirstLetter } from './utils/util';

function DisplayAvailableKeysShortcuts(props) {
    return (
        <StyledComponent>
            <Heading>Active Shortcuts Available:</Heading>
            { props.keysShortcuts.map((shortcut, index) => {
                return (
                    <div key={`id${index}`}>
                        <p>{capitalizeFirstLetter(shortcut.keysShortcuts)} - {shortcut.description}</p>
                    </div>
                )
            })}
        </StyledComponent>
    )
}

const withList = withKeyboardShortcuts(DisplayAvailableKeysShortcuts);
export default withList;

const StyledComponent = styled.div`
    height: 50vh;
    background-color: #f6f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
`
const Heading = styled.div`
    color: #d9163b;
    font-size: xx-large;
    padding: 20px;
`