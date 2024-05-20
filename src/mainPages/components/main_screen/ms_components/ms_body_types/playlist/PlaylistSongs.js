import { ExplicitFill, MusicNote } from "react-bootstrap-icons";
import './PlaylistSong.css'


function PlaylistSong(props) {
    const songs = props.props;
    let counter = 0;
    const songItems = songs?.items ? songs.items.map((item) => {
        counter++;

        var artistNames = "";
        if (item?.track?.artists)
        {
            item.track.artists.forEach(artist => {
                    artistNames += artist.name + ", ";
                });
                artistNames = artistNames.slice(0, -2);
        }
        

        var artistDisp = null;
        if (item?.track?.explicit) {
            artistDisp = <span><ExplicitFill style={{padding:'0 4px 0 0', color:'rgb(179, 178, 178)'}}/>{artistNames}</span>
        } else {
            artistDisp = <span>{artistNames}</span>
        }

        var ms = item?.track?.duration_ms;
        const min = Math.floor(ms / 60000);
        const sec = ((ms % 60000) / 1000).toFixed(0);
        const duration = min + ":" + (sec < 10 ? '0' : '') + sec;


        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const month = date.toLocaleString('default', { month: 'short' }); // Get month in 3 characters
            const day = date.getDate();
            const year = date.getFullYear();
            return `${month} ${day}, ${year}`;
        };

        const icon = item?.track?.album?.images[0]?.url ? <img src={item.track.album.images[0].url} alt=""/> : <MusicNote />;


        return (
            <div className="song-container" key={item.id}>
                <div id="ct-container">
                    <span id="ct">{counter}</span>
                </div>
                <div id="song-abs">
                    {icon}
                    <div id="info">
                        <p>{item?.track?.name}</p>
                        {artistDisp}
                    </div>
                </div>
                <div id="song-albm">
                    <span id="info">{item?.track?.album?.name}</span>
                </div>
                <div id="date-add">
                    <span id="info">{formatDate(item?.added_at)}</span>
                </div>
                <div>
                    <span id="info" style={{fontSize:'14px'}}>{duration}</span>
                </div>
            </div>
        );
    }) : null;

    return (
        <div>
            {songItems}
        </div>
    );

}

export default PlaylistSong;

