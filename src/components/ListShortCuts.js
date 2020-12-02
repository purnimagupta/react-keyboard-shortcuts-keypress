import React from 'react';
import styled from 'styled-components';
import { withKeyboardShortcuts } from '../lib/withKeyboardShortcuts';
import { capitalizeFirstLetter } from './utils/util';

function ListShortCuts(props) {
    return (
        <StyledComponent>
            <Heading>ActiveShortCuts Available:</Heading>
            { props.keyboardShortcuts.map((shortcut, index) => {
                return (
                    <div key={`id${index}`}>
                        <p>{capitalizeFirstLetter(shortcut.keyboardShortcuts)} - {shortcut.description}</p>
                    </div>
                )
            })}
        </StyledComponent>
    )
}

const withList = withKeyboardShortcuts(ListShortCuts);
export default withList;

const StyledComponent = styled.div`
    height: 50vh;
    background-color: #f6f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Heading = styled.div`
    color: #d9163b;
    font-size: xx-large;
    padding: 20px;
`