import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'


const PrivateRoute = () => {
    // let {user} = useContext(AuthContext)

    const user = localStorage.getItem('authToken');

        return user ? <Outlet/> : <Navigate to="/login"/>

}

export default PrivateRoute;