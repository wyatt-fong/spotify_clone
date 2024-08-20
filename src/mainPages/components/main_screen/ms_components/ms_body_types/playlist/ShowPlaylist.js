import './ShowPlaylist.css';
import PlaylistSongs from './PlaylistSongs';
import { usePlaylistSetter } from '../../../../../setters/PlaylistSetter';
import { useProfileContext } from '../../../../../setters/ProfileContext';
import { Dot, PlayCircleFill, ThreeDots, ListUl, Clock, Hash} from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSpotifyPlayer } from '../../../../../setters/SpotifyPlayerContext';

function ShowPlaylist() {

    const {playlist} = usePlaylistSetter() || {};
    const { profile, getProfile } = useProfileContext() || {};
    const {playMusic} = useSpotifyPlayer();

    const playPlaylist = (item) => {
        playMusic(item, 'playlist');
    }
    
    useEffect(() => {
        if (playlist) {
            const fetchData = async () => {
                try {
                    if (playlist) {
                        const id = playlist.owner?.id;
                        if (id) {
                            await getProfile(id);
                        }
                    }
                } catch (error) {
                    console.log(error);
                } 
            };
            fetchData();
        }
    }, [playlist]);

    const [songs, setSongs] = useState([]);
    const token = window.localStorage.getItem("token");

    const href = playlist?.tracks.href;


    useEffect(() => {
        if (playlist){
            axios.get(href, {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then((response) => {
                setSongs(response.data);
            }).catch ((error) => {console.log(error);
            });  
        }
    },[playlist, href, token])

    const playlistImage = playlist?.images && playlist.images.length > 0 ? playlist.images[0].url : null;
    const profileImage = profile?.images && profile.images?.length > 0 ? profile.images[0].url : null;
    const displayName = playlist?.owner && playlist.owner?.display_name ? playlist.owner.display_name : null;
    let total = (playlist?.tracks && playlist.tracks.total) ? playlist.tracks.total : null;
    total = total > 100 ? 100 : total;
    const playlistOwnerPFP = profileImage ? <img id="ownrPfp" src={profileImage} alt="pfp"></img> : null;
    
    console.log(playlist);

    return (
        <div className='playlist-container'>
            <div className='playlist-header'>
                <img src={playlistImage} alt='Playlist Img' className='playlist-img'></img>
                <div className='ph-details'>
                    <span>Playlist</span>
                    <h1 style={{fontWeight:'bold'}}>{playlist?.name}</h1>
                    <div className='specifics'>
                        {playlistOwnerPFP}
                        <span style={{fontWeight:'bold'}}>{displayName}</span> 
                        <Dot/>
                        <p>{total} songs</p>
                    </div>
                </div>
            </div>
            <div className='flexbox' id="outter">
                <div className='flexbox' style={{width:'98%'}}>
                    <button style={{height:56, display:'flex', alignItems:'center'}}>
                        <PlayCircleFill id="circleFill" onClick={() => playPlaylist(playlist.uri)}/>
                    </button>
                    <button id="dots">
                        <ThreeDots/>
                    </button>
                    <button id="list">
                        <span style={{padding:0, fontSize: 16}}>List</span>
                        <ListUl id='list-icon' className='bold-icon'/>
                    </button>
                </div>
            </div>
            <div className='labels'>
                <span style={{width: '3%', marginLeft:'10px'}}><Hash/></span>
                <div className='flexbox' style={{width: '39.5%'}}>
                    <span style={{margin:'0 auto 0 0', fontWeight:'bold'}}>Title</span>
                </div>
                <div className='flexbox' style={{width: '28.5%'}}>
                    <span style={{margin:'0 auto 0 0', fontWeight:'bold'}}>Album</span>
                </div>
                <div className='flexbox' style={{width: '25%'}}>
                    <span style={{margin:'0 auto 0 0', fontWeight:'bold'}}>Date Added</span>
                </div>
                <div className='flexbox'>
                    <span className='bold-icon'><Clock/></span>
                </div>
            </div>
            <div id="songs">
                <PlaylistSongs props={songs}/>
            </div>
        </div>
    );
}
export default ShowPlaylist;
