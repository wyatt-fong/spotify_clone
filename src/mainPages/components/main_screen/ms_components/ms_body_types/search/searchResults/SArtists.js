import { PlayCircleFill } from 'react-bootstrap-icons';

function SArtists(props) {
    const artists = props.props;

    const artistDisp = artists?.items ? artists.items.map((item) => {
        const imgURL = item?.images[0]?.url ? item.images[0].url : "";
        const name = item?.name ? item.name : "";

        return (
            <div className="searchCard" key={item.id}>
                <div class="img_cir_hold">
                    <img class="cardImg" style={{borderRadius:'50%'}} src={imgURL} alt="PFP"/>
                    <PlayCircleFill id="searchPlayIcon"/>
                </div>
                <span class="cardTitle">{name}</span>
                <span class="cardDetails">Artist</span>
            </div>
        );
    }) : null;

    return (
        <div className='s-row-container'>
            <h2 className='searchTitle'>Artists</h2>
            <div className='content'>
                {artistDisp}
            </div>
        </div>
    )
}

export default SArtists;