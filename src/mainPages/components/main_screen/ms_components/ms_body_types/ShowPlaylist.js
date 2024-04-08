import './ShowPlaylist.css';
import { usePlaylistSetter } from '../../../../PlaylistSetter';
import { Dot, PlayCircleFill, ThreeDots } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';

function ShowPlaylist() {

    const PROFILE_URI_BASE = "https://api.spotify.com/v1/"
    const [token, setToken] = useState("");
    
    useEffect(() => {
        setToken(window.localStorage.getItem("token"));
    }, []);

    const {playlist} = usePlaylistSetter() || {};

    if (!playlist) {
        return <div>Loading...</div>; 
    }

    const playlistImage = playlist.images && playlist.images.length > 0 ? playlist.images[0].url : null;
    const displayName = playlist.owner && playlist.owner.display_name ? playlist.owner.display_name : null;
    const total = (playlist.tracks && playlist.tracks.total) ? playlist.tracks.total : null;

    return (
        <div>
            <div className='playlist-header'>
                <img src={playlistImage} alt='Playlist Img' className='playlist-img'></img>
                <div className='ph-details'>
                    <span>Playlist</span>
                    <h1>{playlist.name}</h1>
                    <div className='specifics'>
                        <img src='' alt='pfp'></img>
                        <span style={{fontWeight:'bold'}}>{displayName}</span> {/* Change to anchor tag later that takes to profile*/}
                        <Dot/>
                        <p>{total} songs</p>
                    </div>
                </div>
            </div>
            <div id="123">
                <button>
                    <PlayCircleFill id="circleFill"/>
                </button>
                <button id="dots">
                    <ThreeDots style={{color:'white'}}/>
                </button>
            </div>
            <div>

            </div>
        </div>
    );
}
export default ShowPlaylist;