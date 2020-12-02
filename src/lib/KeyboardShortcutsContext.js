import React from 'react';

export const KeyboardShortcutsContext = React.createContext({
    keysShortCuts: [],
    setKeysShortcuts: () => {},
});

export const KeyboardShortcutsProvider = (props) => {
    const [keysShortCuts, setKeysShortcuts ] = React.useState([]);
    return(
        <KeyboardShortcutsContext.Provider value={{keysShortCuts, setKeysShortcuts}}>
            {props.children}
        </KeyboardShortcutsContext.Provider>
    )
}