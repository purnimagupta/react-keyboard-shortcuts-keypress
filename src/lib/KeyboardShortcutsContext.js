import React from 'react';

export const KeyboardShortcutsContext = React.createContext({
    keysShortcuts: [],
    setKeysShortcuts: () => {},
});

export const KeyboardShortcutsProvider = (props) => {
    const [keysShortcuts, setKeysShortcuts ] = React.useState([]);
    return(
        <KeyboardShortcutsContext.Provider value={{keysShortcuts, setKeysShortcuts}}>
            {props.children}
        </KeyboardShortcutsContext.Provider>
    )
}