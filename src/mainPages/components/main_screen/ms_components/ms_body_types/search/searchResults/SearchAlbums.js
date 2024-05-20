import './SearchAlbums.css'; 
import { Dot } from 'react-bootstrap-icons';

function SearchAlbums(props) {
    const albums = props.props;
    console.log(albums);

    const albumItems = albums?.items ? albums.items.map((item) => {
        const albumArtist = item?.artists[0]?.name ? item.artists[0].name: "";
        const relDate = item?.release_date ? item.release_date.split('-')[0] : "";
        const imgURL = item?.images[0]?.url ? item.images[0].url : null;
        const albumTitle = item?.name ? item.name : "";

        return (
            <div className='albumCard'>
                <img src={imgURL} alt="Album Img" className='albumImg'/>
                <span id="albumTtle">{albumTitle}</span>
                <span id="albumDetails">{relDate}<span className="dot"><Dot/></span><a>{albumArtist}</a></span>
            </div>
        )

    }) : null;

    return (
        <div className="album-container">
            <h2 className='searchTitle'>Album</h2>
            <div className="albums">
                {albumItems}
            </div>
        </div>
    )
}

export default SearchAlbums;    