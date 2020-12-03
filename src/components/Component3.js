import React from 'react';
import styled from 'styled-components';
import KeyboardShortcutsListener from '../lib/KeyboardShortcutsListener';


function Component3() {
    const [color, setColor] = React.useState('#4141cb');
    const turnLightGreen = () => {      
        setColor(color => color === '#4141cb' ? '#41cbab': '#4141cb');;
    }
    return (
        <StyledComponent color={color}>
            <KeyboardShortcutsListener 
                keysShortcuts="shift y" 
                callback={turnLightGreen} 
                description="Changes Component 3 color to Green" 
            />
            Component3
        </StyledComponent>
    )
}

export default Component3;

const StyledComponent = styled.div`
    height: 50vh;
    background-color: ${props => props.color ? `${props.color}` : null };
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
`