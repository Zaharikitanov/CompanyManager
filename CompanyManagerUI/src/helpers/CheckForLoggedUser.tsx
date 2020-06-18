import React, { useContext } from 'react';
import { UserContext } from '../userContext';
import GetUserRole from "./GetUserRole";
import {login} from "../login";

const CheckForLoggedUser = () => {

    const {userData, setUserData} = useContext(UserContext);

    // let getUserIdFromCookie = ("; "+document.cookie).split("; uid=").pop().split(";").shift();
    // let isUserLoggedIn = getUserIdFromCookie ? true : false;
    
    // const loginUser = async () => {
    //     const user = await login();
    //     setUserData(user);
    // }

    // if (isUserLoggedIn){
    //     loginUser();
    // }
    // console.log(userData);
    return (userData !== null) ? true : false;
}

export default CheckForLoggedUser;