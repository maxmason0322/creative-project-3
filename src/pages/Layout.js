import { Outlet, Link } from "react-router-dom";
import '../App.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Calculator</Link>
          </li>
          <li>
            <Link to="/mountain">Mountain</Link>
          </li>
          <li>
            <Link to="/beach">Beach</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;