import './MSBody.css';
import { usePlaylistSetter } from '../../../PlaylistSetter';
import { useDisplaySetter } from '../../../DisplaySetter';
import React, { lazy, useEffect } from 'react';
const ShowPlaylist = lazy(() => import('./ms_body_types/playlist/ShowPlaylist'));

function MSBody() {

    const {playlist} = usePlaylistSetter() || {};

    const {display, chooseDisplay} = useDisplaySetter();
    
    useEffect(() => {
        if (playlist) {
            chooseDisplay(<ShowPlaylist/>)
        }
    }, [playlist]);
    
    return (
        <div className='ms-body'>
            {display}
        </div>
    );
}

export default MSBody;