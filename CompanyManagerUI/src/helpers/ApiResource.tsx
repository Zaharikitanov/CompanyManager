import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router';
import { GetItems } from "./requests";
import { WretcherError } from "wretch";
import { AdminRoute } from "../routes";

type ApiResourceProps = {
    children;
    url: string;
    reloadData?: boolean;
}

const ApiResource = (props: ApiResourceProps): JSX.Element => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<WretcherError>(null);
    const [reload, setReload] = useState(false);
    const [data, setData] = useState<any>();
    const { reloadData = true } = props;

    const RenderErrorDefault = (error: WretcherError): JSX.Element => {
        switch (error.status) {
            case 400:
            case 401:
            case 404:
            case 500:
                return <Redirect to='/' />
            default:
                return <Redirect to='/' />
        }
    }
    
    useEffect(() => {
        if(props.url.indexOf("null") !== 1)
        {
            GetItems(props.url)
            .catch(error => setError(error))
            .then((json) => {
                setData(json);
                setLoading(false);
            });
        }
        
        setReload(reloadData);
      },[reload]);

    if (error) {
        return RenderErrorDefault(error);
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }
    
    if (data == null) {
        return <Redirect to={AdminRoute.Index} />
    }

    return props.children(data);
}

export default ApiResource;