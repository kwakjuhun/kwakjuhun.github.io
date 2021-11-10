import React, { useEffect } from 'react';

const themeStateContext = React.createContext();
const themeChangeContext = React.createContext();

function changeTheme(state, action){
    state = !state;
    window.sessionStorage.setItem("isDarkmode", state);
    return state
}

function SelectThemeProvider({children}){
    const [state, dispatch] = React.useReducer(changeTheme, false);

    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        let theme = false;
        if(isBrowser){
            theme = window.sessionStorage.getItem("isDarkmode");
            if(theme === null){
                window.sessionStorage.setItem("isDarkmode", false)
            }else if(theme == "true"){
                dispatch();
            }
        }
    },[dispatch])
    return(
        <themeStateContext.Provider value={state}>
            <themeChangeContext.Provider value={dispatch}>
                {children}
            </themeChangeContext.Provider>
        </themeStateContext.Provider>
    )        
}

function useThemeState(){
    const context = React.useContext(themeStateContext);
    return context
}

function useThemeChange(){
    const context = React.useContext(themeChangeContext);
    return context
}

export {
    SelectThemeProvider,
    useThemeState,
    useThemeChange,
}