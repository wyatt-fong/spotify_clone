import { createContext, useContext, useState } from "react";
import axios from 'axios'


const ProfileContext = createContext();

export const ProfileContextProvider = ({children}) => {
    const [profile, setProfile] = useState("");
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null;

    

    const getProfile = (ownerID) => {
        axios.get("https://api.spotify.com/v1/users/" + ownerID, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => setProfile(response.data))
        .catch(error => console.log(error))
    }

    return (
        <ProfileContext.Provider value ={{profile, getProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfileContext = () => useContext(ProfileContext);