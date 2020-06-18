import React, { useContext } from 'react';
import { UserContext } from '../userContext';
import CheckForLoggedUser from './CheckForLoggedUser';

const GetUserRole = () => {

    const {userData, setUserData} = useContext(UserContext);
    
    if(CheckForLoggedUser()){
        return userData.role;
    }
}

export default GetUserRole;