import './LibraryShortcuts.css';
import {Search, ListUl} from 'react-bootstrap-icons'

function LibraryShortcuts() {
    return (
        <div className="iconShortcuts">
            <button className='btn'>
                <span><Search className='bold-icon'/> </span> 
            </button >
            <button className='btn' id='recents'><span>Recents</span> <ListUl className='bold-icon'/></button>
        </div>
    );
}

export default LibraryShortcuts;