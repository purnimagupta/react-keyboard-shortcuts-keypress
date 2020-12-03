import React, { useState, useEffect, useContext } from 'react';
import { Listener } from 'keypress.js';
import { KeyboardShortcutsContext } from './KeyboardShortcutsContext';

let listener = new Listener();

function KeyboardShortcutsListener(props) {
    // This will expect shortcut keys and a callback, and description of it
    const { keysShortcuts, callback, description } = props;
    console.log("keysShortcuts", keysShortcuts);
    const { setKeysShortcuts } = useContext(KeyboardShortcutsContext);
    
    useEffect(() => {
        const keysShortCutsID = listener.simple_combo(keysShortcuts, callback);
        console.log("keysShortCutsID", keysShortCutsID)
        setKeysShortcuts(
            keyboardShortcuts => 
            [
                ...keyboardShortcuts, 
                {
                    keysShortcuts,
                    description,
                    keysShortCutsID
                }
            ]
        );

        return () => {
            listener.unregister_combo(keysShortCutsID)
            setKeysShortcuts((keyboardShortcuts) => 
                { 
                    return keyboardShortcuts.filter(kbCombo => kbCombo.keysShortCutsID !== keysShortCutsID)
                }
            )
        }

    }, [callback, description, keysShortcuts, setKeysShortcuts]);

    return (
        <div>
        </div>
    )
}


export default KeyboardShortcutsListener;
