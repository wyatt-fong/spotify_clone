import './SearchArtists.css';

function SearchArtists(props) {
    const artists = props.props;
    console.log(artists.items[0]);

    const artistDisp = artists?.items ? artists.items.map((item) => {
        const imgURL = item?.images[0]?.url ? item.images[0].url : "";
        const name = item?.name ? item.name : "";

        return (
            <div className="artist-cont" key={item.id}>
                <img id="artist-img" src={imgURL} alt="PFP"/>
                <span id="artist-name">{name}</span>
                <span>Artist</span>
            </div>
        );
    }) : null;

    return (
        <div className='s-artist-container'>
            <h2 className='searchTitle'>Artists</h2>
            <div className='artistCards'>
                {artistDisp}
            </div>
        </div>
    )
}

export default SearchArtists;