import './STracks.css';
import QueueComponent from '../../../../../queue_component_icon/QueueComponent';
import { ExplicitFill, MusicNote, PlayFill} from 'react-bootstrap-icons';
import { useSpotifyPlayer } from '../../../../../../setters/SpotifyPlayerContext';

function STracks(props) {
    const songs = props.props;

    const {playMusic, addToQueue} = useSpotifyPlayer();
 
    const setCurrPlayer = (item) => {
        playMusic(item, 'track');
    }
    const songItems = songs?.items ? songs.items.map((item) => {
        var artistNames = "";
        if (item?.artists)
        {
            item.artists.forEach(artist => {
                    artistNames += artist.name + ", ";
                });
                artistNames = artistNames.slice(0, -2);
        }

        var artistDisp = null;
        if (item?.explicit) {
            artistDisp = <span><ExplicitFill style={{padding:'0 4px 0 0', color:'rgb(179, 178, 178)'}}/>{artistNames}</span>
        } else {
            artistDisp = <span>{artistNames}</span>
        }

        var ms = item?.duration_ms;
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        const duration = min + ":" + (sec < 10 ? '0' : '') + sec;

        const icon = item?.album?.images[0]?.url ? <img src={item.album.images[0].url} alt=""/> : <MusicNote />;

        return (
            <div className="song-cont" key={item.id} > 
                <div id="song-abstr">
                    <div className='track-img' onClick={() => setCurrPlayer(item.uri)}>
                        {icon}  
                        <PlayFill id="track-play-icon"/>
                    </div>
                    <div id="song_det">
                        <p>{item?.name}</p>
                        {artistDisp}
                    </div>
                </div>
                <div id="song-alb">
                    <span>{item?.album?.name}</span>
                </div>
                <div onClick={() => addToQueue(item.uri)}>
                    <QueueComponent />
                </div>
                <div className='pushRight'>
                    <span className="songLength">{duration}</span>
                </div>
            </div>
        );
    }) : null;

    return (
        <div style={{marginBottom: '50px'}}>
            <h2 className='searchTitle'>Songs</h2>
            {songItems}
        </div>
    );

}

export default STracks;