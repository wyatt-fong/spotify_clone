import './SearchTracks.css';
import { ExplicitFill, MusicNote, } from 'react-bootstrap-icons';

function SearchTracks(props) {
    const songs = props.props;
    const songItems = songs?.items ? songs.items.slice(0, 5).map((item) => {
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
            <div className="song-cont" key={item.id}>
                <div id="song-abstr">
                    {icon}
                    <div id="song_det">
                        <p>{item?.name}</p>
                        {artistDisp}
                    </div>
                </div>
                <div id="song-alb">
                    <span>{item?.album?.name}</span>
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

export default SearchTracks;