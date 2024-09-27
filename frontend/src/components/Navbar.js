
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const location = useLocation(); // Get the current location
    const activeRoute = location.pathname; // Get the current route
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return(
        <header>

            <div className="container">

                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>

                <nav>

                    {user && (
                        <div>
                        <span>{user.email.slice(0, 4)}</span>
                        <button className="logout" onClick={handleClick}>Log Out</button>
                    </div>
                    )} 

                    {!user && (   
                    <div>
                        <Link to="/login" className={activeRoute === '/login' ? 'active' : ''}>
                            Login
                        </Link>

                        <Link to="/signup" className={activeRoute === '/signup' ? 'active' : ''}>
                            Signup
                        </Link>
                    </div>
                    )}

                </nav>

            </div>
        </header>
    )
}

export default Navbar