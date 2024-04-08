import { ArrowLeft, ArrowRight, Bell, DoorClosed, ImageAlt} from 'react-bootstrap-icons';
import './MSHeader.css'


function MSHeader({logout}) {
    return (
        <div className='ms-header'>
                <button className='center'>
                    <ArrowLeft />
                </button>
                <button className='center'>
                    <ArrowRight/>
                </button>
                <div id="slamRight">
                    <button id="logout"onClick={() => logout()}> 
                        <DoorClosed/> <h4>Logout</h4>
                    </button>
                    <button className='center'>
                        <Bell />
                    </button>
                    <button className='center'>
                        <ImageAlt/>
                    </button>

                </div>
            </div>
    );
}

export default MSHeader;