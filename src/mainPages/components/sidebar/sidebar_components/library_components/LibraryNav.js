import './LibraryNav.css'
import {Book, Plus, ArrowRight} from 'react-bootstrap-icons'


function LibraryNav() {
    return (
            <div className="libraryNav">
                <header>
                    <div className='libraryHead'>
                        <div>
                            <button className='btn'>
                                <span><Book className='bold-icon'/></span>
                                Your Library
                            </button>
                        </div>
                        <span className='icon'>
                            <button className='btn'><Plus className='bold-icon'/></button>
                        </span>
                        <span className='icon'>
                            <button className='btn'><ArrowRight className='bold-icon'/></button>
                        </span>
                    </div>
                </header>
                <div className='subCat'> 
                    <span>
                        Playlists
                    </span>    
                    <span>
                        Artists
                    </span>
                    <span>
                        Albums
                    </span>
                </div>
            </div>
    );
}

export default LibraryNav;
