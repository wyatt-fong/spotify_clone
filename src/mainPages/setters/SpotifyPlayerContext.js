// SpotifyPlayerContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const SpotifyPlayerContext = createContext();

export const SpotifyPlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    const [deviceId, setDeviceId] = useState(null);
    const [trackSelected, setTrackSelected] = useState(false);
    const [shuffleEnabled, setShuffleEnabled] = useState(false); // Track shuffle state
    const token = window.localStorage.getItem('token');

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

    useEffect(() => {
        if (player) {
            player.addListener('player_state_changed', (state) => {
                if (!state) {
                    console.error('Player state is unavailable');
                } else {
                    setShuffleEnabled(state.shuffle); // Update shuffle state based on player state
                }
            });
        }
    }, [player]);

    const playMusic = async (URI, contextType) => {
        console.log("attempting to play music");
        if (!deviceId || !token) {
            console.error("Device ID or token not available");
            return;
        }

        try {
            let bodyData = {};
            if (contextType === 'track') {
                bodyData.uris = [URI];
            } else if (contextType === 'playlist' || contextType === 'album' || contextType === 'artist')  {
                bodyData.context_uri = URI;
            } else {
                console.error("Invalid context type provided");
                return;
            }
            

            const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            });

            setTrackSelected(true);
        } catch (error) {
            console.error('Error playing track:', error);
        }
    };


    const pauseMusic = async () =>  {

        try {
            const response = await fetch(`https://api.spotify.com/v1/me/player/pause`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                console.log("Paused track");
            } else {
                const errorData = await response.json();
                console.error("Error pausing track:", errorData);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const addToQueue = async (uri) => {
        try {
            await fetch(`https://api.spotify.com/v1/me/player/queue?uri=${encodeURIComponent(uri)}&device_id=${deviceId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error adding to queue:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const skipFoward = async () =>  {
        try {
            const response = await fetch(`https://api.spotify.com/v1/me/player/next`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                console.log("Skipped to next track");
            } else {
                const errorData = await response.json();
                console.error("Error skipping track:", errorData);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const skipPrevious = async () =>  {
        try {
            const response = await fetch(`https://api.spotify.com/v1/me/player/previous`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                console.log("Went back a track");
            } else {
                const errorData = await response.json();
                console.error("Error reverting track:", errorData);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const getCurrentTrack = async () => {
        try {
            const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                const currentTrackData = await response.json();
                return currentTrackData;
            } else {
                console.error("Failed to get current track:", await response.json());
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const getUserQueue = async () => {
        try {
            const response = await fetch('https://api.spotify.com/v1/me/player/queue', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                const queueData = await response.json();
                console.log("User's Queue:", queueData);
                return queueData;
            } else {
                console.error("Failed to get user queue:", await response.json());
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const getPlaybackState = async () => {
        try {
            const response = await fetch('https://api.spotify.com/v1/me/player', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                const playbackStateData = await response.json();
                console.log("Playback State:", playbackStateData);
                return playbackStateData;
            } else {
                console.error("Failed to get playback state:", await response.json());
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const shuffleMusic = async () => {
        const newShuffleState = !shuffleEnabled; // Toggle shuffle state
        try {
            await fetch(`https://api.spotify.com/v1/me/player/shuffle?state=${newShuffleState}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setShuffleEnabled(newShuffleState); // Update local shuffle state
        } catch (error) {
            console.error("Error toggling shuffle:", error);
        }
    };
    
    
    return (
        <SpotifyPlayerContext.Provider value={{deviceId, trackSelected, playMusic, pauseMusic, 
            addToQueue, skipFoward, skipPrevious, getCurrentTrack, getUserQueue, 
            shuffleMusic, getPlaybackState}}>
            {children}
        </SpotifyPlayerContext.Provider>
    );
};

export const useSpotifyPlayer = () => useContext(SpotifyPlayerContext);
