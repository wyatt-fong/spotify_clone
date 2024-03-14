import './Library.css';
import LibraryShortcuts from './library_components/LibraryShortcuts';
import LibraryNav  from './library_components/LibraryNav';
import LibraryContents from './library_components/LibraryContents';
import { CollectionProvider } from './sampleData/collections';

// Div that encloses the Shortcuts and Contents needs to change into a scroll

function Library() {
    return (
        <div className="library">
            <LibraryNav />
            <div> 
                <LibraryShortcuts />
                <CollectionProvider>
                    <LibraryContents />
                </CollectionProvider>
            </div>
        </div>
        
    );
}

export default Library;