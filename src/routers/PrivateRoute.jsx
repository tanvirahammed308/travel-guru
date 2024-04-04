
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext);
    const location=useLocation()
    console.log(location.pathname)
    if (loader) {
        return <span className="loading loading-ring loading-lg"></span>

        
    }
    if (user) {
        return children
        
    }
  return (
    <Navigate to='/login' state={location.pathname}></Navigate>
  )
}

PrivateRoute.propTypes = {

    children: PropTypes.node,
}
export default PrivateRoute