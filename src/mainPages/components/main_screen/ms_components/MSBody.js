import './MSBody.css';
import { usePlaylistSetter } from '../../../PlaylistSetter';
import React, { lazy, useEffect, useState } from 'react';
const ShowPlaylist = lazy(() => import('./ms_body_types/playlist/ShowPlaylist'));

function MSBody() {

    const {playlist} = usePlaylistSetter() || {};
    const [toDisplay, setToDisplay] = useState(<p>Loading...</p>);
    
    useEffect(() => {   
        if (playlist != null) {
            setToDisplay(<ShowPlaylist/>);
        }
    }, [playlist]);
    
    return (
        <div className='ms-body'>
            {toDisplay}
        </div>
    );
}

export default MSBody;