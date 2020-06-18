import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../userContext';
import { ButtonProps } from 'reactstrap';

type RedirectButtonProps = ButtonProps & {
    dataObjectId?: any;
    url?: string;
    buttonText?: string;
    buttonColor?: string;
    className?: string;
    iconClassName?: string;
    redirectToExternal?: boolean;
    disabled?: boolean;
    callback?: () => void;
}

const RedirectButton = (props: RedirectButtonProps) => {
    const {objectData} = useContext(UserContext);

    const { redirectToExternal = false } = props;
    const history = useHistory();

    const setObjectId = () => {
        const isThereObjectData = objectData.getObjectData ? true : false;

        if(!isThereObjectData){
            objectData.setObjectData(props.dataObjectId);
        } 
        if (props.dataObjectId && isThereObjectData){
            objectData.setObjectData(props.dataObjectId);
        }
    }
    
    const redirectToUrl = () => {
        
        setObjectId();
        if (props.callback) {
            props.callback();
        }

        if (redirectToExternal) {
            window.open(props.url, "_self");
        } else {
            history.push(props.url);
        }
    }

    return <Button color={props.buttonColor} className={props.className} onClick={redirectToUrl} disabled={props.disabled || false}>
            {props.iconClassName &&
                <i className={props.iconClassName}></i>
            }
            {props.buttonText}
    </Button>;
}

export default RedirectButton;