# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions of usage:

The fastest way to start using shortcuts in your React application is by importing the `KeyboardShortcutsListener` in your component, like this:

> WIP: npm module `react-keyboard-shortcuts-keypress`

Install the library by running `npm install react-keyboard-shortcuts-keypress`

```
import React from 'react';
import KeyboardShortcutsListener from 'react-keyboard-shortcuts-keypress'; 

function MyComponent() {
    const doSomething = () => {
        // Do something here when shortcut is trigerred, like set a state value, or make a fetch request 
    }
    return (
        <>
            <KeyboardShortcutsListener
                keysShortcuts="shift a"
                callback={doSomething} 
                description="Does something"
            />
                {
                    /* Rest of your component */
                }
        </>
    )
}

```

check the [Keypress documentation](https://github.com/dmauro/Keypress/blob/master/keypress.coffee#L761) to see the complete list of supported keys.


## Available APIs

This keyboard binding provides 3 APIs - KeyboardShortcutsListener, KeyboardShortcutsProvider, withKeyboardShortcuts.

1. `KeyboardShortcutsListener`
Refer above example

2.  `KeyboardShortcutsProvider` Context Provider Component

Once you attach `KeyboardShortcutsListener` within your component code, you can wrap them within the `KeyboardShortcutsProvider` provider, like this:

```
import React from 'React';
import MyComponent from './MyComponent'
import { KeyboardShortcutsProvider }  from 'react-keyboard-shortcuts-keypress';

function App() {
    return (
        <>
            <KeyboardShortcutsProvider>
                <MyComponent />
            </KeyboardShortcutsProvider>
        </>
    );
}

```

This will make the details of the configured shortcut listeners along with their descriptions available in the React Context provider, inside `keysShortcuts`.

Other components can then access `keysShortcuts` as long as they are wrapped within `<KeyboardShortcutsProvider>`

3. Higher Order Component `withKeyboardShortcuts`

    To be able to access state data from Context Provider we can wrap our custom component inside HOC component `withKeyboardShortcuts`. It will return an array of objects which can 
    be used to display all available keysShortcuts to the user.

    Ex: 

    ```
    import React from 'react';
    import { withKeyboardShortcuts } from 'react-keyboard-shortcuts-keypress';
    
    function DisplayAvailableKeysShortcuts() {
        <!-- This will give us keyboardShortcuts which is a array of objects and can be accessed via props.keysShortcuts -->
        return(
            <div>
                {
                    props.keysShortcuts.map((shortcut) => (
                        // display data or do sth
                    ))
                }
            </div>
        )
    }

    export default withKeyboardShortcuts(Component);
    ```