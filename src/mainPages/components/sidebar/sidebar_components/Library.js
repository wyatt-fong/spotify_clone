import './Library.css';
import LibraryNav  from './library_components/LibraryNav';
import LibraryCollection from './library_components/LibraryCollection';

// Div that encloses the Shortcuts and Contents needs to change into a scroll

function Library() {
    return (
        <div className="library">
            <LibraryNav />
            <LibraryCollection />
        </div>
        
    );
}

export default Library;