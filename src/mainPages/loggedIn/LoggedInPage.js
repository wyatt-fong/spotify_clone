import SideBar from './components/sidebar/Sidebar';
import './LoggedInPage.css';

// Reminder to try and implement the logout button somewhere
function LoggedInPage({logout}) {
    return (
        <div className="MainPage">
            <SideBar />
            
        </div>
    );
}

export default LoggedInPage;
