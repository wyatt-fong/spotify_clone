import './LibraryNav.css'


function LibraryNav() {
    return (
        <div className="libraryNav">
            <header>
                <div className='libraryHead'>
                    <div>
                        <button>
                            <span>S</span> {/* Delete later to add symbol */}
                             Your Library
                        </button>
                    </div>
                    <button className='icon'>
                        <span>+</span>
                    </button>
                    <button className='icon'>
                        <span>-</span>
                    </button>
                </div>
            </header>
            <div className='subCat'> 
                <button>
                    <span>
                        Playlists
                    </span>
                </button>
                <button>
                    <span>
                        Artists
                    </span>
                </button>
                <button>
                    <span>
                        Albums
                    </span>
                </button>
            </div>
        </div>
    );
}

export default LibraryNav;
