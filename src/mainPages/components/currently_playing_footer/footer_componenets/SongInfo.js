import './SongInfo.css';
import { useSpotifyPlayer } from '../../../setters/SpotifyPlayerContext';
import { useEffect, useState } from 'react';

function SongInfo() {
    const [currSongInfo, setCurrSongInfo] = useState(null);
    const [prevSong, setPrevSong] = useState("");

    const { trackSelected, getCurrentTrack } = useSpotifyPlayer();

    // Need to fix how were are probing for the current track and updating the UI for it
    // Current method is too taxing because it is constantly fetching the currentTrack API and etc.
    // In short, change this or the project is basically wraps

    useEffect(() => {
        if (!trackSelected) return;
        if (prevSong === currSongInfo) return;

        const fetchCurrentTrack = async () => {
            const trackInfo = await getCurrentTrack();
            setPrevSong(currSongInfo);
            setCurrSongInfo(trackInfo);
        };


        fetchCurrentTrack();

        const interval = setInterval(fetchCurrentTrack, 1000); 

        return () => clearInterval(interval); 
    }, [trackSelected, getCurrentTrack]);

    const img = currSongInfo?.item?.album?.images[0]?.url;
    const name = currSongInfo?.item?.name;

    var artistNames = "";
    if (currSongInfo?.item?.artists) {
        currSongInfo.item.artists.forEach(artist => {
            artistNames += artist.name + ", ";
        });
        artistNames = artistNames.slice(0, -2); // Remove trailing comma and space
    }

    return (
        <div className='footer-song-info'>
            {img && <img src={img} alt={name} className='footer-img'/>}
            <div className="footer-song-details">
                <p className="song-name">{name}</p>
                <p className="artist-names">{artistNames}</p>
            </div>
        </div>
    );
}

export default SongInfo;
