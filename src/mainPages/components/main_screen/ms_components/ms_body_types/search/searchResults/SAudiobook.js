function SAudiobook(props) {

    const audiobooks = props.props;

    const audiobookItems = audiobooks?.items ? audiobooks.items.map((item) => {
        const imgURL = item?.images[0].url ? item.images[0].url : "";
        const title = item?.name ? item.name : "";
        const author = item?.authors[0]?.name ? item.authors[0].name : "";

        return (
            <div className='searchCard' key={item.id}>
                <img src={imgURL} alt="Audio Img" className='cardImg'/>
                <span className='cardTitle'>{title}</span>
                <span className='cardDetails'>{author}</span>
            </div>
        )
    }) : null;

    return (
        <div className='s-row-container'>
            <h2 className='searchTitle'>Audiobooks</h2>
            <div className='content'>
                {audiobookItems}
            </div>
        </div>
    );
}

export default SAudiobook;