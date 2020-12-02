import React from 'react';
import styled from 'styled-components';
import KeyboardShortcutsListener from '../lib/KeyboardShortcutsListener';

function Component1() {
    const [color, setColor] = React.useState('#8f8fcb');
    const turnRed = () => {
        setColor(color => color === '#8f8fcb' ? 'red' : '#8f8fcb');
    }
    return (
        <StyledComponent color={color}>
            <KeyboardShortcutsListener 
                keysShortcuts="shift a" 
                callback={turnRed} 
                description="Changes Component 1 color to Red" 
            />
            Component1
        </StyledComponent>
    )
}

export default Component1;

const StyledComponent = styled.div`
    height: 50vh;
    background-color: ${props => props.color ? `${props.color}` : null };
    display: flex;
    justify-content: center;
    align-items: center;
`
