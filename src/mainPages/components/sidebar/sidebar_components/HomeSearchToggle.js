import './HomeSearchToggle.css';
import Home from '../../main_screen/ms_components/ms_body_types/home/Home.js'
import SearchPage from '../../main_screen/ms_components/ms_body_types/search/SearchPage.js';
import { HouseFill, Search} from 'react-bootstrap-icons'
import { useDisplaySetter } from '../../../DisplaySetter';
import { usePlaylistSetter } from '../../../PlaylistSetter.js';
function HomeSearchToggle() {
    const {chooseDisplay} = useDisplaySetter();
    const {choosePlaylist} = usePlaylistSetter();

    const goHome = () => {
        chooseDisplay(<Home/>);
        choosePlaylist(null);
    }
    
    const goSearch= () => {
        chooseDisplay(<SearchPage/>);
        choosePlaylist(null);
    }
    
    return (
        <div className="main-nav">
            <ul> 
                <li style={{paddingBottom: 5, paddingTop: 10}}>
                    <div className='choice' onClick={goHome}>
                        <button className='btn'><HouseFill /></button> 
                        <span>Home</span>
                    </div>
                </li>
                <li style={{paddingTop: 12}}>
                    <div className='choice' onClick={goSearch}>
                        <button className='btn'><Search/></button> 
                        <span>Search</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HomeSearchToggle;