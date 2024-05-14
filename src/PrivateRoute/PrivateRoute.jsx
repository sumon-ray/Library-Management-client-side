import {Navigate,useLocation} from 'react-router-dom'
import UseAuth from '../UseAuth/UseAuth';

const PrivateRoute = ({children}) => {
    const{user,loading} = UseAuth();
    const location = useLocation()
    // if(loading){
    //     return <h1 className="text-3xl">Loading</h1>
    // }
    // if(!user){
    //     return <Navigate to='/login' state={location?.pathname || '/'} />
    

    if(loading) return <p>loading...</p> 
    if(user) return children
    return <Navigate to={'/login'} state={location.pathname} replace={true} />

};

export default PrivateRoute;









