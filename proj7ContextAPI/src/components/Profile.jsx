import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    

    if(!user) return <div className='my-3 text-purple-500 text-xl'>Please Login</div>
    else
    return <div className='my-3 text-blue-500 text-xl'>Welcome {user.username}</div>
}

export default Profile