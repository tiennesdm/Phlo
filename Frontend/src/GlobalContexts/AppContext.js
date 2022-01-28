import React, { createContext, useState } from 'react';
export const AppContext = createContext({});
export const AppContextConsumer = AppContext.Consumer;
export const AppContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [language, setLanguage] = useState('en');
    const [authenticated, setAuthenticated] = useState(true);
    const [data, setData] = useState(null);
    const [authUser, setIsAuthUser] = useState(null);


    /**
     * generate context
     */
    const context = {
        isLoading,
        setIsLoading,
        authenticated,
        setAuthenticated,
        language,
        setLanguage,
        data, 
        setData,
        authUser, setIsAuthUser
    };

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    );
};
