import React, { createContext } from 'react';

export const UserContext = createContext()

export default function UserContextProvider(props) {

    const userName = "Umair Ahmad"

    return (
        <UserContext.Provider value={{ userName }}>
            {props.children}
        </UserContext.Provider>
    )
}
