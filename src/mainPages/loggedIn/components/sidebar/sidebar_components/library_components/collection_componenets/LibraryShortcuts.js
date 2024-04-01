import './LibraryShortcuts.css';

function LibraryShortcuts() {
    return (
        <div className="iconShortcuts">
            <button>
                <span>S</span> {/* Delete later to add symbol */}
            </button>
            <button id='recents'>Recents <span>S</span></button>
        </div>
    );
}

export default LibraryShortcuts;