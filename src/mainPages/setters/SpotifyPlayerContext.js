// SpotifyPlayerContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const SpotifyPlayerContext = createContext();

export const SpotifyPlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    const [deviceId, setDeviceId] = useState(null);
    const token = window.localStorage.getItem('token'); // Assume token is set after login

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.async = true;
        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(token); },
                volume: 0.5
            });

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                setDeviceId(device_id); // Save device ID
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('initialization_error', ({ message }) => {
                console.error('Failed to initialize', message);
            });

            player.addListener('authentication_error', ({ message }) => {
                console.error('Failed to authenticate', message);
            });

            player.addListener('account_error', ({ message }) => {
                console.error('Failed to validate Spotify account', message);
            });

            player.connect();
            setPlayer(player);
        };
    }, [token]);

    const playMusic = async (URI) => {
        if (!deviceId || !token) {
            console.error("Device ID or token not available");
            return;
        }

        try {
            await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uris: [URI] })
            });
            console.log('Track is playing.');
        } catch (error) {
            console.error('Error playing track:', error);
        }
    };

    return (
        <SpotifyPlayerContext.Provider value={{ playMusic }}>
            {children}
        </SpotifyPlayerContext.Provider>
    );
};

export const useSpotifyPlayer = () => useContext(SpotifyPlayerContext);
