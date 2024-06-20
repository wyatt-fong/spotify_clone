import { Dot, PlayCircleFill } from 'react-bootstrap-icons';

function SEpisodes(props) {
    const episodes = props.props;

    const episodeItems = episodes?.items ? episodes.items.map((item) => {
        const imgURL = item?.images[0]?.url ? item.images[0].url : null;
        const name = item?.name ? item.name : ""; 
        const duration = item?.duration_ms ? Math.ceil(item.duration_ms / 60000) + " min": "";
        
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const month = date.toLocaleString('default', { month: 'short' }); 
            const year = date.getFullYear();
            return `${month}, ${year}`;
        }

        const date = item?.release_date ? formatDate(item.release_date) : "";


        return (
            <div className='searchCard' key={item.id}>
                <div className="img_cir_hold">
                    <img src={imgURL} alt="Episode Img" className='cardImg'/>
                    <PlayCircleFill id="searchPlayIcon"/>
                </div>
                <span class="cardTitle">{name}</span>
                <span class="cardDetails">{date}<Dot/>{duration}</span>
                
            </div>
        )
    }) : null;

    return (
        <div className='s-row-container'>
            <h2 className='searchTitle'>Episodes</h2>
            <div className='content'>
                {episodeItems}
            </div>
        </div>
    );
}

export default SEpisodes;