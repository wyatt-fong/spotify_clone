import './Player.css';
import SongInfo from './footer_componenets/SongInfo'
import PlayerControls from './footer_componenets/PlayerControls';

function Player() {
    return (
        <div className='footer-player'>
            <SongInfo/>
            <PlayerControls/>
        </div>
    );
}

export default Player;