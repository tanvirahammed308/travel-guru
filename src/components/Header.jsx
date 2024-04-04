import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const {user,createSignOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    createSignOut().then(() => {
      alert('Sign-out successful.')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });

  }
  const navLinks = (
    <>
      <li >
        <Link to='/'>Home</Link>
      </li>
      <li >
        <Link to='/news'>News</Link>
      </li>
      <li >
        <Link to='/'>Destination</Link>
      </li>
      <li >
        <Link to='/' >Blog</Link>
      </li>
      <li >
        <Link to='/'>Contact</Link>
      </li>
      <li className="md:hidden ">
        {
          user ?  <Link onClick={handleLogOut}>Logout</Link> :  <Link to='/login'>Login</Link>
        }
       
      </li>
      <li >
        {
          user &&  <p>{user.displayName}</p>
        }
      
      </li>
    </>
  );
  return (
    <div className="navbar  fixed  top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box  w-52"
          >
            {
                navLinks
            }
          </ul>
        </div>
       
        <img src={logo} alt="logo"   className=" text-yellow-200 w-20 pl-2 md:w-28"/>
       
        
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLinks
          }
        </ul>
      </div>
      <div className="navbar-end hidden md:flex">{
        user ?  <Link className="btn btn-warning btn-sm" onClick={handleLogOut}>Logout</Link> :  <Link to='/login' className="btn btn-warning btn-sm">Login</Link>
      }
       
      </div>
    </div>
  );
};

export default Header;
