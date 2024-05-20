import SideBar from './components/sidebar/Sidebar';
import MainScreen from './components/main_screen/MainScreen';
import './LoggedInPage.css';
import { PlaylistSetterProvider } from './PlaylistSetter';
import { ProfileContextProvider } from './ProfileContext';
import { DisplaySetterProvider } from './DisplaySetter';

// Reminder to try and implement the logout button somewhere

function LoggedInPage({logout}) {
    return (
        <div className="MainPage">
            <PlaylistSetterProvider>
                <DisplaySetterProvider>
                    <ProfileContextProvider>
                        <SideBar />
                        <MainScreen logout = {logout}/>
                    </ProfileContextProvider>
                    </DisplaySetterProvider>
            </PlaylistSetterProvider>
        </div>
    );
}

export default LoggedInPage;
