import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../userContext';

// type RedirectButtonProps = {
//     url: string;
//     buttonText: string;
//     buttonColor: string;
//     className?: string;
//     iconClassName?: string;
//     redirectToExternal?: boolean;
//     disabled?: boolean;
// }

const TestPage = (props) => {

    // const msg = useContext(UserContext);
console.log("testpage");
    return <h1>testpage</h1>;
}

export default TestPage;