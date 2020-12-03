import { useContext } from 'react';
import { KeyboardShortcutsContext } from './KeyboardShortcutsContext';

export const withKeyboardShortcuts = ( Component ) => ({ ...props }) => {
    const {  keysShortcuts } = useContext(KeyboardShortcutsContext);  
    return (
        <Component
            keysShortcuts={keysShortcuts}
            {...props}
        />
    )
};