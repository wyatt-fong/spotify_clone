import { PlayCircleFill } from "react-bootstrap-icons";
import { usePlaylistSetter } from "../../../../../../setters/PlaylistSetter";
import { useSpotifyPlayer } from "../../../../../../setters/SpotifyPlayerContext";

function SPlaylists(props) {
    const playlists = props.props;

    const {choosePlaylist} = usePlaylistSetter();

    const {playMusic} = useSpotifyPlayer();

    const playPlaylist = (item) => {
        playMusic(item, 'playlist');
    }

    const setPlaylist = (item) => {
        choosePlaylist(item);
    }

    
    const playlistItems = playlists?.items ? playlists.items.map((item) => {
        const imgURL = item?.images[0]?.url ? item.images[0].url : "";
        const name = item?.name ? item.name : "";
        const owner = item?.owner?.display_name ? item.owner.display_name : "";
        
        return (
            <div className='searchCard' key={item.id} onClick={() => setPlaylist(item)}>
                <div className="img_cir_hold">
                    <img className="cardImg" src={imgURL} alt="img"/>
                    <PlayCircleFill id="searchPlayIcon" onClick = {() => playPlaylist(item.uri)}/>
                </div>
                <span className="cardTitle">{name}</span>
                <span className='cardDetails'>By {owner}</span>
            </div>  
        )
    }) : null;

    return (
        <div className="s-row-contianer">
            <h2 className='searchTitle'>Playlists</h2>
            <div className='content'>
                {playlistItems}
            </div>
        </div>
    )
}

export default SPlaylists;