import React from 'react';
import KeyboardShortcutsListener from '../lib/KeyboardShortcutsListener';

import styled from 'styled-components';

function Component2() {
    const [color, setColor] = React.useState('#6b6bcd');
    const turnGreen = () => {
        setColor(color => color === '#6b6bcd' ? 'green' : '#6b6bcd');;
    }
    return (
        <StyledComponent color={color}>
             <KeyboardShortcutsListener 
                keysShortcuts="alt ctrl c" 
                callback={turnGreen} 
                description="Changes Component 2 color to Green" 
            />
            Component2
        </StyledComponent>
    )
}

export default Component2;

const StyledComponent = styled.div`
    height: 50vh;
    background-color: ${props => props.color ? `${props.color}` : null };;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
`