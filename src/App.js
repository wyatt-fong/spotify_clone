import LoggedInPage from './mainPages/LoggedInPage.js';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const CLIENT_ID = "d806ac9d002f4c05b35283e0675d5a9e";
    const REDIRECT_URI = window.location.href.includes('localhost') 
      ? "http://localhost:3000" 
      : "https://wyatt-fong.github.io/spotify_clone";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "user-modify-playback-state user-read-currently-playing streaming user-read-playback-state user-read-private user-library-read user-read-recently-played playlist-read-private playlist-read-collaborative";
  
    const [token, setToken] = useState("");
  
    useEffect(() => {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");
  
      if (token && hash) {
        window.localStorage.removeItem("token");
        token = null;
      }
  
      if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1];
  
        if (token) {
          window.location.hash = "";
          window.localStorage.setItem("token", token);
          setToken(token);
        }
      }
    }, []);
  
    const logout = () => {
      setToken(""); // Clear token from state
      window.localStorage.removeItem("token"); // Clear token from localStorage
      window.location.href = "https://accounts.spotify.com/en/logout"; // Log out from Spotify
      window.location.reload(); // Reload the page to reset the app
    };
  
    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}&show_dialog=true`;
  
    return (
      <div>
        {!token ? (
          <div className="Login">
            <a href={authUrl}>
              <button>Log In to Spotify</button>
            </a>
          </div>
        ) : (
          <div>
            <LoggedInPage logout={logout} />
          </div>
        )}
      </div>
    );
  }
  
  export default App;