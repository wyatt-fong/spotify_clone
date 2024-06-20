import './HomeSearchToggle.css';
import Home from '../../main_screen/ms_components/ms_body_types/home/Home.js'
import SearchPage from '../../main_screen/ms_components/ms_body_types/search/SearchPage.js';
import { House, HouseFill, Search} from 'react-bootstrap-icons'
import { useDisplaySetter } from '../../../DisplaySetter';
import { usePlaylistSetter } from '../../../PlaylistSetter.js';
import { useState } from 'react';
function HomeSearchToggle() {
    const {chooseDisplay} = useDisplaySetter();
    const {choosePlaylist} = usePlaylistSetter();
    const [disp, setDisp] = useState("home");

    const goHome = () => {
        chooseDisplay(<Home/>);
        choosePlaylist(null);
        setDisp("home");
    }
    
    const goSearch= () => {
        chooseDisplay(<SearchPage/>);
        choosePlaylist(null);
        setDisp("search");
    }

    const homeIcon = disp === "home" ? <HouseFill/> : <House/>
    
    return (
        <div className="main-nav">
            <ul> 
                <li style={{paddingBottom: 5, paddingTop: 10}}>
                    <div className={`choice ${disp === "home" ? 'active' : 'inactive'}`} onClick={goHome}>
                        <button className='btn'>{homeIcon}</button> 
                        <span>Home</span>
                    </div>
                </li>
                <li style={{paddingTop: 12}}>
                    <div className={`choice ${disp === "search" ? 'active' : 'inactive'}`}onClick={goSearch}>
                        <button className='btn'><Search/></button> 
                        <span>Search</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HomeSearchToggle;