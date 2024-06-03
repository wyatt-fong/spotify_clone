import { useEffect, useState } from 'react';
import './SearchResults.css';
import SearchTracks from './searchResults/SearchTracks';
import SearchAlbums from './searchResults/SearchAlbums';
import SearchArtists from './searchResults/SearchArtists';

function SearchResults() {
    const searchBar = document.getElementById("searchInput"); // Holds the input value to send to API
    const searchBar2 = searchBar.value.replaceAll(" ", "+");
    const beginURI = 'https://api.spotify.com/v1/search?query=';
    const endURI = '&type=album,track,artist&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=10';
    const token = window.localStorage.getItem("token");

    const [searchRes, setSearchRes] = useState({});
    const [artists, setArtists] = useState({});
    const [albums, setAlbums] = useState({});
    const [tracks, setTracks] = useState({});
    

    useEffect(() => {
        fetch(beginURI + searchBar2 + endURI, {
            headers: {
                Authorization: "Bearer " + token,
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setSearchRes(data);
        })
        setArtists(searchRes.artists);
        setAlbums(searchRes.albums);
        setTracks(searchRes.tracks);

    }, [searchBar.value]);
    

    return (
        <div className='search-results'>
            <SearchTracks props={tracks}/>
            <SearchArtists props={artists}/>
            <SearchAlbums props={albums}/> 
        </div>
    );
}

export default SearchResults;