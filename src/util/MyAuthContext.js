import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode"

const MyAuthContext = createContext()

export const AuthProvider =({ children }) => {
    const navigate = useNavigate()
    const logUrl = "https://bildingapi.onrender.com/api/token/"
    const refreshUrl = "https://bildingapi.onrender.com/api/token/refresh/"

    let localstorage1 = localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null;
    let localstorage2 = localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null;
    const [authTokens, setAuthTokens] = useState(() => localstorage1)
    const [user, setUser] = useState(() => localstorage2)



    const loginUser = async (e) => {

        e.preventDefault()

        console.log("form submission")
        let response = await fetch(logUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })

        let data = await response.json()
        console.log('data:', data.access)

        
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
            navigate('/', { successMessage: 'Successfully logged in!' } )
            

        } else {
            alert("Something went wrong")
        }
    }


    
    const contextData = {
        user: user,
        loginUser: loginUser,
        authTokens: authTokens
    }

    return (
        <MyAuthContext.Provider value={contextData}>
            {children}
        </MyAuthContext.Provider>
    )
}


export default MyAuthContext;