import React from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import ListShortCuts from './components/ListShortCuts';
import styled from 'styled-components';
import { KeyboardShortcutsProvider }  from './lib/KeyboardShortcutsContext';

function App() {
    return (
        <AppContainer>
            <KeyboardShortcutsProvider>
                <Component1 />
                <Component2 />
                <Component3 />
                <ListShortCuts />
            </KeyboardShortcutsProvider>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`
