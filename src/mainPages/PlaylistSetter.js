import { createContext, useContext, useState} from "react";


const PlaylistSetter = createContext();


export const PlaylistSetterProvider = ({children}) => {
    const [playlist, setPlaylist] = useState(null);

    
    const choosePlaylist = (item) => {
        setPlaylist(item);
    }

    return (
        <PlaylistSetter.Provider value={{ playlist, choosePlaylist }}>
            {children}
        </PlaylistSetter.Provider>
    );
} 

export const usePlaylistSetter = () => useContext(PlaylistSetter);

