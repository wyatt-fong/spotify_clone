import HomeSearchToggle from "./sidebar_components/HomeSearchToggle"
import Library  from "./sidebar_components/Library";
import './Sidebar.css';


function SideBar() {
    return (
        <div className="sidebar">
            <HomeSearchToggle />
            <Library />
        </div>
        
    );
}

export default SideBar;