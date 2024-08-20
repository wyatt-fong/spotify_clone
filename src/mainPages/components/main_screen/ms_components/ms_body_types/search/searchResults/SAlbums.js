import { Dot, PlayCircleFill } from 'react-bootstrap-icons';
import { useSpotifyPlayer } from '../../../../../../setters/SpotifyPlayerContext';

function SAlbums(props) {
    const albums = props.props;
    const {playMusic} = useSpotifyPlayer();

    const playAlbum = (item) => {
        playMusic(item, 'album');
    }

    const albumItems = albums?.items ? albums.items.map((item) => {
        const albumArtist = item?.artists[0]?.name ? item.artists[0].name: "";
        const relDate = item?.release_date ? item.release_date.split('-')[0] : "";
        const imgURL = item?.images[0]?.url ? item.images[0].url : null;
        const albumTitle = item?.name ? item.name : "";
        return (
            <div className='searchCard' key={item.id}>
                <div class="img_cir_hold">
                    <img src={imgURL} alt="Album Img" className='cardImg'/>
                    <PlayCircleFill id="searchPlayIcon" onClick={() => playAlbum(item.uri)}/>
                </div>
                <span class="cardTitle">{albumTitle}</span>
                <span class="cardDetails">{relDate}<span className="dot"><Dot/></span>{albumArtist}</span>
            </div>
        )

    }) : null;

    return (
        <div className="s-row-container">
            <h2 className='searchTitle'>Albums</h2>
            <div className="content">
                {albumItems}
            </div>
        </div>
    )
}

export default SAlbums;    