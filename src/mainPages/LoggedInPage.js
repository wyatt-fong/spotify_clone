import React from 'react';
import SideBar from './components/sidebar/Sidebar';
import MainScreen from './components/main_screen/MainScreen';
import './LoggedInPage.css';
import { PlaylistSetterProvider } from './setters/PlaylistSetter';
import { ProfileContextProvider } from './setters/ProfileContext';
import { DisplaySetterProvider } from './setters/DisplaySetter';
import { SpotifyPlayerProvider } from './setters/SpotifyPlayerContext';
import Player from './components/currently_playing_footer/Player';

// Reminder to try and implement the logout button somewhere

function LoggedInPage({logout}) {
    return (
        <div className="MainPage">
            <SpotifyPlayerProvider>
                <PlaylistSetterProvider>
                    <DisplaySetterProvider>
                        <ProfileContextProvider>
                                <SideBar />
                                <MainScreen logout = {logout}/>
                                <Player/>
                        </ProfileContextProvider>
                        </DisplaySetterProvider>
                </PlaylistSetterProvider>
            </SpotifyPlayerProvider>
        </div>
    );
}

export default LoggedInPage;
