import React,{createContext,useContext} from "react";

const UserContext = createContext();

export default function UserProvider({children}) {
    const [user, setUser] = React.useState('John Doe');

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export function UserProfile() {
    const user = useContext(UserContext);
    return <div>{user}'s Profile</div>;
}