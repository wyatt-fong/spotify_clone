import './LibraryNav.css'


function LibraryNav() {
    return (
        <div className="libraryNav">
            <div className='libraryHead'>
                    <h2>** Your Library</h2>
            </div>
            <div className='icons'>
                <h2>+</h2>
                <h2>-</h2>
            </div>
            <div className='subCat'> 
                <button>Playlists</button>
                <button>Artists</button>
                <button>Albums</button>
            </div>
        </div>
    );
}

export default LibraryNav;
