import SideBar from './components/sidebar/Sidebar';
import MainScreen from './components/main_screen/MainScreen';
import './LoggedInPage.css';
import { PlaylistSetterProvider } from './PlaylistSetter';

// Reminder to try and implement the logout button somewhere

function LoggedInPage({logout}) {
    return (
        <div className="MainPage">
            <PlaylistSetterProvider>
                <SideBar />
                <MainScreen logout = {logout}/>
            </PlaylistSetterProvider>
        </div>
    );
}

export default LoggedInPage;
