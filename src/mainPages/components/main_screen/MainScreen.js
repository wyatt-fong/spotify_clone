import './MainScreen.css';
import './ms_components/MSHeader'
import MSHeader from './ms_components/MSHeader';
import MSBody from './ms_components/MSBody';

function MainScreen ({logout}) {
    return( 
        <div className="main-screen">
            <MSHeader logout = {logout}/>
            <MSBody />
        </div>
    );
}

export default MainScreen;