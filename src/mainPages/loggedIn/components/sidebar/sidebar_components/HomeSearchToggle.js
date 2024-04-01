import './HomeSearchToggle.css';
function HomeSearchToggle() {
    return (
        <div className="main-nav">
            <ul> 
                <li style={{paddingBottom: 5, paddingTop: 10}}>
                    <a href='./'>
                        <button>S</button> {/* Delete later to add symbol */}
                        <span>Home</span>
                    </a>
                </li>
                <li style={{paddingTop: 12}}>
                    <a href='./'>
                        <button>S</button> {/* Delete later to add symbol */}
                        <span>Search</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HomeSearchToggle;