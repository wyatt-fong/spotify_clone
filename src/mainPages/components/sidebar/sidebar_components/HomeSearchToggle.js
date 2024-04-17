import { usePlaylistSetter } from '../../../PlaylistSetter';
import './HomeSearchToggle.css';
import {HouseFill, Search} from 'react-bootstrap-icons'
function HomeSearchToggle() {

    const {choosePlaylist} = usePlaylistSetter();
    const handleClick = () => {
        choosePlaylist(null);
    }
    
    return (
        <div className="main-nav">
            <ul> 
                <li style={{paddingBottom: 5, paddingTop: 10}}>
                    <div className='choice'>
                        <button className='btn' onClick={handleClick}><HouseFill /></button> {/* Delete later to add symbol */}
                        <span>Home</span>
                    </div>
                </li>
                <li style={{paddingTop: 12}}>
                    <div className='choice'>
                        <button className='btn'><Search/></button> {/* Delete later to add symbol */}
                        <span>Search</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HomeSearchToggle;