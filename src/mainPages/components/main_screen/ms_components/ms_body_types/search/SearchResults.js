import { useEffect, useState } from 'react';
import './SearchResults.css';
import STracks from './searchResults/STracks';
import SAlbums from './searchResults/SAlbums';
import SArtists from './searchResults/SArtists';
import SPlaylists from './searchResults/SPlaylists';
import SEpisodes from './searchResults/SEpisodes';
import SAudiobook from './searchResults/SAudiobook';


function SearchResults() {
    const searchBar = document.getElementById("searchInput"); // Holds the input value to send to API
    const searchBar2 = searchBar.value.replaceAll(" ", "+");
    const beginURI = 'https://api.spotify.com/v1/search?query=';
    const endURI = '&type=album,track,artist,playlist,episode,audiobook&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=10';
    const token = window.localStorage.getItem("token");

    const [searchRes, setSearchRes] = useState({});
    const [artists, setArtists] = useState({});
    const [albums, setAlbums] = useState({});
    const [tracks, setTracks] = useState({});
    const [playlists, setPlaylists] = useState({});
    const [episodes, setEpisodes] = useState({});
    const [audiobooks, setAudiobooks] = useState({});
    

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
        setPlaylists(searchRes.playlists);
        setEpisodes(searchRes.episodes);
        setAudiobooks(searchRes.audiobooks);

    }, [searchBar.value]);
    

    return (
        <div className='search-results'>
            <STracks props={tracks}/>
            <SArtists props={artists}/>
            <SAlbums props={albums}/> 
            <SPlaylists props={playlists}/>
            <SEpisodes props={episodes}/>
            <SAudiobook props={audiobooks}/>
        </div>
    );
}

export default SearchResults;