import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

const Navigation = ()=>{
    return(
    <>
      <div className="navigation">
        <Link to='/' className="logo-container">
            <CrownLogo/>
        </Link> 
       <div className="nav-links-container">
            <Link to='/shop' className="nav-link">Shop</Link>
            <Link to='/sign-in' className="nav-link">Sign In</Link>
       </div>
      </div>
      <Outlet/>
    </>
    )
}

export default Navigation