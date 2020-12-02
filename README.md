# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

This keyboard binding provides 3 APIs - KeyboardShortcutsProvider, withKeyboardShortcuts, KeyboardShortcutsListener.

1.  `KeyboardShortcutsProvider` Context Provider Component

    To be able to display Active Shortcuts available, we will wrap our components inside Component `KeyboardShortcutsProvider`. It will store the active shortcuts in the state.

    Ex: 

    ```
        import { KeyboardShortcutsProvider }  from './lib/KeyboardShortcutsContext';
        ....
        ....
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

    ```
2. Higher Order Component `withKeyboardShortcuts`

    This HOC enables your component to get all the keyboardshortcutKeys.

    Ex: 

    ```import { withKeyboardShortcuts } from 'react-binding-with-keypress';
    
    function Compoent() {
        <!-- This will give us keyboardShortcuts which is a array of objects and can be accessed via props.keyboardShortcuts -->
        return(
            <div>
                {
                    props.keyboardShortcuts.map((shortcut) => (
                        // display data or do sth
                    ))
                }
            </div>
        )
    }

    export default withKeyboardShortcuts(Component);
     ```

3.  KeyboardShortcut Component `KeyboardShortcuts`

    ```
    import KeyboardShortcutsListener from '../lib/KeyboardShortcutsListener';
    ```

    This component expects `keysShortcuts`, `callback`, `description` props.

    Ex:

    ```
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
    ```
