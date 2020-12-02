import { useContext } from 'react';
import { KeyboardShortcutsContext } from './KeyboardShortcutsContext';

export const withKeyboardShortcuts = ( Component ) => ({ ...props }) => {
    const {  keysShortCuts } = useContext(KeyboardShortcutsContext);  
    return (
        <Component
            keyboardShortcuts={keysShortCuts}
            {...props}
        />
    )
};