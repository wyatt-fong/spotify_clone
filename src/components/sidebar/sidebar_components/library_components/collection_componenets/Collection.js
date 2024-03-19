import React, {useContext} from 'react';
import CollectionContext from '../../../../sampleData/sampleData';
import './Collection.css';

function Collection() {
    const collection = useContext(CollectionContext);
    
    return (
        <div className='container'>
            <img id='libImage' src={collection.image} alt={collection.name} />
            <div className='details'>
                <h2>{collection.name}</h2>
                <p>{collection.artists}</p>
            </div>
        </div>
    );
}

export default Collection;
