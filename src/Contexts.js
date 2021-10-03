import React from 'react';

const themeStateContext = React.createContext();
const themeChangeContext = React.createContext();

function changeTheme(state,action){
    const theme = state.theme === 'light'? 'dark' : 'light';
    window.localStorage.setItem("theme", theme)
    return {theme: theme};
}

function ThemeProvider({children}){
    const isBrowser = typeof window !== "undefined";
    let theme = 'light';
    if(isBrowser){
        theme = window.localStorage.getItem("theme");
        if(theme === null)
            window.localStorage.setItem("theme","light")
    }
    const [state, dispatch] = React.useReducer(changeTheme,{theme:theme === null ? 'light':theme});
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
    return context;
}

function useThemeChange(){
    const context = React.useContext(themeChangeContext);
    return context
}

export {
    ThemeProvider,
    useThemeState,
    useThemeChange,
}