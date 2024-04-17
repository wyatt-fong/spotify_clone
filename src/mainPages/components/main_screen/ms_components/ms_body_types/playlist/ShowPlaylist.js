import './ShowPlaylist.css';
import PlaylistSongs from './PlaylistSongs';
import { usePlaylistSetter } from '../../../../../PlaylistSetter';
import { useProfileContext } from '../../../../../ProfileContext';
import { Dot, PlayCircleFill, ThreeDots, ListUl, Clock, Hash} from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

function ShowPlaylist() {

    const {playlist} = usePlaylistSetter() || {};
    const { profile, getProfile } = useProfileContext() || {};
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
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
            } finally {
                setLoading(false);
            }
            
        };
        fetchData();
    }, [playlist]);    

    if (loading ) {
        return (<>Loading...</>);
    }

    const playlistImage = playlist.images && playlist.images.length > 0 ? playlist.images[0].url : null;
    const profileImage = profile.images && profile.images.length > 0 ? profile.images[0].url : null;
    const displayName = playlist.owner && playlist.owner.display_name ? playlist.owner.display_name : null;
    const total = (playlist.tracks && playlist.tracks.total) ? playlist.tracks.total : null;
    const playlistOwnerPFP = profileImage ? <img id="ownrPfp" src={profileImage} alt="pfp"></img> : null;
    

    return (
        <div className='playlist-container'>
            <div className='playlist-header'>
                <img src={playlistImage} alt='Playlist Img' className='playlist-img'></img>
                <div className='ph-details'>
                    <span>Playlist</span>
                    <h1>{playlist.name}</h1>
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
                        <PlayCircleFill id="circleFill"/>
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
                <div className='flexbox' style={{width: '40%'}}>
                    <span style={{margin:'0 auto 0 0', fontWeight:'bold'}}>Title</span>
                </div>
                <div className='flexbox' style={{width: '27%'}}>
                    <span style={{margin:'0 auto 0 0', fontWeight:'bold'}}>Album</span>
                </div>
                <div className='flexbox' style={{width: '27%'}}>
                    <span style={{margin:'0 auto 0 0', fontWeight:'bold'}}>Date Added</span>
                </div>
                <div className='flexbox'>
                    <span className='bold-icon'><Clock/></span>
                </div>
            </div>
            <div id="songs">
                <PlaylistSongs/>
            </div>
        </div>
    );
}
export default ShowPlaylist;
