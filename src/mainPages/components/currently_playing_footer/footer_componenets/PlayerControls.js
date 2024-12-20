import './PlayerControls.css';
import { PauseCircleFill, PlayCircleFill, SkipEndFill, SkipStartFill, Repeat, Shuffle } from 'react-bootstrap-icons';
import { useSpotifyPlayer } from '../../../setters/SpotifyPlayerContext';
import { useState } from 'react';

function PlayerControls() {
    const { playMusic, getPlaybackState, pauseMusic, skipFoward, skipPrevious, shuffleMusic} = useSpotifyPlayer();
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffledEnabled, setShuffleEnabled] = useState(false);

    const handleAction = async (item) => {
        try {
            const pbS = await getPlaybackState();
            switch (item) {
                case 'p':
                    if (pbS?.is_playing === false) {
                        playMusic(pbS?.item?.uri, pbS?.item?.type);
                        setIsPlaying(true);
                    } else {
                        pauseMusic();
                        setIsPlaying(false);
                    }
                    break;
                case 'f':
                    skipFoward();
                    break;
                case 'b':
                    skipPrevious();
                    break;
                case 's':
                    shuffleMusic(); // Toggle shuffle
                    setShuffleEnabled(!shuffledEnabled);
                    console.log(shuffledEnabled);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error("An error occurred while handling action:", error);
        }
    };

    return (
        <div className='player-controls'>
            <div className='literal-functions'>
                <Shuffle 
                    className={`footer-icon ${shuffledEnabled ? 'shuffle-active' : ''}`} 
                    style={{ fontSize: '120%' }} 
                    onClick={() => handleAction('s')} 
                />
                <SkipStartFill className='footer-icon' style={{ fontSize: '150%' }} onClick={() => handleAction('b')} />
                {isPlaying
                    ? <PauseCircleFill className='footer-icon' style={{ fontSize: '200%' }} onClick={() => handleAction('p')} />
                    : <PlayCircleFill className='footer-icon' style={{ fontSize: '200%' }} onClick={() => handleAction('p')} />
                }
                <SkipEndFill className='footer-icon' style={{ fontSize: '150%' }} onClick={() => handleAction('f')} />
                <Repeat className='footer-icon' style={{ fontSize: '120%' }} />
            </div>
        </div>
    );
}

export default PlayerControls;
