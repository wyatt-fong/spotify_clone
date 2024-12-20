import { useEffect, useState } from 'react';
import './SearchResults.css';
import STracks from './searchResults/STracks';
import SAlbums from './searchResults/SAlbums';
import SArtists from './searchResults/SArtists';
import SPlaylists from './searchResults/SPlaylists';


function SearchResults() {
    const searchBar = document.getElementById("searchInput"); // Holds the input value to send to API
    const beginURI = 'https://api.spotify.com/v1/search?query=';
    const endURI = '&type=album,track,artist,playlist&locale=en-US%2Cen%3Bq%3D0.9&offset=2&limit=10';
    const token = window.localStorage.getItem("token");

    const [searchRes, setSearchRes] = useState({});
    const [artists, setArtists] = useState({});
    const [albums, setAlbums] = useState({});
    const [tracks, setTracks] = useState({});
    const [playlists, setPlaylists] = useState({});

    useEffect(() => {
        let searchBar2 = searchBar.value.replaceAll(" ", "+");
        fetch(beginURI + searchBar2 + endURI, {
            headers: {
                Authorization: "Bearer " + token,
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setSearchRes(data);
            console.log(data);
        })
        setArtists(searchRes.artists);
        setAlbums(searchRes.albums);
        setTracks(searchRes.tracks);
        setPlaylists(searchRes.playlists);

    }, [searchBar.value]);
    

    return (
        <div className='search-results'>
            <STracks props={tracks}/>
            <SArtists props={artists}/>
            <SAlbums props={albums}/> 
            <SPlaylists props={playlists}/>
        </div>
    );
}

export default SearchResults;