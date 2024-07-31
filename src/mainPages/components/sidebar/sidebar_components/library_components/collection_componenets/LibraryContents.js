import Collection from './Collection';
import axios from 'axios';
import {useState, useEffect} from 'react'
import { usePlaylistSetter } from '../../../../../setters/PlaylistSetter';

const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/users/minifong/playlists";

function LibraryContents() {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem(("token"))) {
            setToken(localStorage.getItem("token"))
        } 
    }, []);

    useEffect(() => {
        if (token) {
            handleGetPlaylists();
        }
    },[token])

    const handleGetPlaylists = () => {
        axios.get(PLAYLIST_ENDPOINT, {
            headers: {
                Authorization : "Bearer " + token,
            }, 
            params: {
                limit: 50, 
            }
        }).then((response) => { 
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const {choosePlaylist} = usePlaylistSetter();

    const setPlaylist = (item) => {
        choosePlaylist(item);
    }

    const excludedItemId = '37i9dQZF1EYkqdzj48dyYq';
    return (
        <div>
        {
            data?.items ? data.items.filter(item => item.id !== excludedItemId).map((item) =>
            <Collection onClick = {() => setPlaylist(item)} key={item.id} item = {item} />) :  null   
        }
        </div>
    );
}

export default LibraryContents;