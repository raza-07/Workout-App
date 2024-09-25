
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation(); // Get the current location
    const activeRoute = location.pathname; // Get the current route
    return(
        <header>

            <div className="container">

                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>

                <nav>

                    <div>
                        <Link to="/login" className={activeRoute === '/login' ? 'active' : ''}>
                            Login
                        </Link>

                        <Link to="/signup" className={activeRoute === '/signup' ? 'active' : ''}>
                            Signup
                        </Link>
                    </div>

                </nav>

            </div>
        </header>
    )
}

export default Navbar