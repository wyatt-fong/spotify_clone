import LibraryShortcuts from "./collection_componenets/LibraryShortcuts";
import LibraryContents from "./collection_componenets/LibraryContents";
import './LibraryCollection.css';

function LibraryCollection() {
    return (
        <div className="collectionContainer">
            <LibraryShortcuts />
            <LibraryContents />
        </div>
        
    );
}

export default LibraryCollection;