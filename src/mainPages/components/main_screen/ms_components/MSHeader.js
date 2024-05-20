import { ArrowLeft, ArrowRight, Bell, DoorClosed} from 'react-bootstrap-icons';
import './MSHeader.css'
import { useEffect, useState } from 'react';

function MSHeader({logout}) {
    
    const [profile, setProfile] = useState("");
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null;

    useEffect(() => {
        fetch("https://api.spotify.com/v1/me", {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }).then((res) => {
            return res.json();
        })
        .then((data) => {
            setProfile(data);
        })
    }, []);

    const img = profile && profile?.images[0] && profile?.images[0]?.url ? profile?.images[0]?.url : null;
    return (
        <div className='ms-header'>
            <button className='center'>
                <ArrowLeft />
            </button>
            <button className='center'>
                <ArrowRight/>
            </button>
            <span id="slamRight">
                <button id="logout"onClick={() => logout()}> 
                    <DoorClosed/> <h4>Logout</h4>
                </button>
                <button className='center'>
                    <Bell />
                </button>
                <button className='center' style={{overflow:'hidden'}}>
                    <img id = "pfp" src={img} alt="PFP"></img>
                </button>
            </span>
        </div>
    );
}

export default MSHeader;