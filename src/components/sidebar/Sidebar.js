import HomeSearchToggle from "./sidebar_components/HomeSearchToggle"
import Library  from "./sidebar_components/Library";
import { CollectionProvider } from '../sampleData/sampleData'
import './Sidebar.css';


function SideBar() {
    return (
        <CollectionProvider>
        <div className="sidebar">
            <HomeSearchToggle />
            <Library />
        </div>
        </CollectionProvider>
        
    );
}

export default SideBar;