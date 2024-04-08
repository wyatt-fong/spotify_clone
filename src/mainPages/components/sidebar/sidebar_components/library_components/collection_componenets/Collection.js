import './Collection.css';

function Collection(props) {
    const {item, onClick} = props;
    return (
        <div onClick={() => onClick(item)} className='container'>
            <img id='libImage' src={item.images[0].url} alt={item.name} />
            <div className='details'>
                <h2>{item.name}</h2>
                <p>{item.owner.display_name}</p>
            </div>
        </div>
    );
}

export default Collection;
