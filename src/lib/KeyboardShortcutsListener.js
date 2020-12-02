import React, { useState, useEffect, useContext } from 'react';
import { Listener } from 'keypress.js';
import { KeyboardShortcutsContext } from './KeyboardShortcutsContext';

let listener = new Listener();

function KeyboardShortcutsListener(props) {
    // This will expect shortcut keys and a callback, and description of it
    const { keysShortcuts, callback, description } = props;
    console.log("keysShortcuts", keysShortcuts);
    const { setKeysShortcuts } = useContext(KeyboardShortcutsContext)
    useEffect(() => {
        const comboID = listener.simple_combo(keysShortcuts, callback);
        console.log("comboId", comboID)
        setKeysShortcuts(
            keyboardShortcuts => 
            [
                ...keyboardShortcuts, 
                {
                  keyboardShortcuts: keysShortcuts,
                  description,
                  comboID
                }
            ]
        );

        return () => {
            listener.unregister_combo(comboID)
            setKeysShortcuts((keyboardShortcuts) => 
                { 
                    return keyboardShortcuts.filter(kbCombo => kbCombo.comboID !== comboID)
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
