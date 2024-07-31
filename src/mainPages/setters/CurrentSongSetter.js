import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CurrentSongSetter = createContext();

export const CurrentSongSetterProvider = ({children}) => {
    const [song, setSong] = useState(null);
    const token = window.localStorage.getItem("token");

    useEffect(() => {
        if (song) {
            playSpecificTrack();
            getDevices();
        }
    }, [song]);



    async function getDevices() {
        try {
          const response = await axios.get(
            'https://api.spotify.com/v1/me/player/devices',
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          );
          console.log('Active devices:', response.data);
        } catch (error) {
          console.error('Error fetching active devices:', error.response ? error.response.data : error.message);
        }
    }
    

    async function playSpecificTrack() {
        if (!token) {
            console.error("No token found");
            return;
        }

        try {
            const response = await axios.put(
                'https://api.spotify.com/v1/me/player/play',
                {
                    uris: [song] // Ensure this is a valid Spotify URI
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Track is playing successfully.');
            console.log(response);
        } catch (error) {
            console.error('Error playing track:', error.response ? error.response.data : error.message);
        }
    }
    
    const chooseSong = (item) => {
        setSong(item); // Update state to trigger playback
    };  

    return (
        <CurrentSongSetter.Provider value={{chooseSong}}>
            {children}
        </CurrentSongSetter.Provider>
    );
}

export const useCurrentSongSetter = () => useContext(CurrentSongSetter);
