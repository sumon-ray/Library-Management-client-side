import {Navigate,useLocation} from 'react-router-dom'
import UseAuth from '../UseAuth/UseAuth';
import { Audio } from 'react-loader-spinner'
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const{user,loading} = UseAuth();
    const location = useLocation()
    // if(loading){
    //     return <h1 className="text-3xl">Loading</h1>
    // }
    // if(!user){
    //     return <Navigate to='/login' state={location?.pathname || '/'} />
    

    if(loading) return <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
    if(user) return children
    return <Navigate to={'/login'} state={location.pathname} replace={true} />

};

export default PrivateRoute;









