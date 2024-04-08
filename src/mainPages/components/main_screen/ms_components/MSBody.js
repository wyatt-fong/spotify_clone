import './MSBody.css';
import { usePlaylistSetter } from '../../../PlaylistSetter';
import React, { lazy, Suspense } from 'react';
const ShowPlaylist = lazy(() => import('./ms_body_types/ShowPlaylist'));

function MSBody() {

    const {playlist} = usePlaylistSetter() || {};

    return (
        <div className='ms-body'>
            <Suspense fallback={<div>Loading...</div>}>
                {playlist && <ShowPlaylist/>}
            </Suspense>
        </div>
    );
}

export default MSBody;