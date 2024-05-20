import React, { useState, Suspense, lazy } from 'react';
import './SearchPage.css';
import SearchDefault from './SearchDefault';

const SearchResults = lazy(() => import('./SearchResults'));

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }

    let SearchResultComponent;
    if (searchTerm !== "") {
        SearchResultComponent = <SearchResults/>;
    } else {
        SearchResultComponent = <SearchDefault/>;
    }

    return (
        <div className="searchContainer">
            <div className='searchBar'>
                <input 
                    type="text" 
                    className="textInput" 
                    id="searchInput" 
                    placeholder="What do you want to play?"
                    autoComplete="off"
                    spellCheck="false"
                    onChange={handleInput}
                />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {SearchResultComponent}
            </Suspense>
        </div>
    );
}

export default SearchPage;
