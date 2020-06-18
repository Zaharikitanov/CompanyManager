import React from "react";
import CustomerTemplate from '../../../components/Templates/CustomerTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';

const ClientDetails = (props): JSX.Element => {

    const templateData = {
        clientName: "Ралица Чолакова",
        email: "r.cholakova@gmail.com",
        phone: "0898 900 800",
    }

    return <>
        <CustomerTemplate viewType={TemplateView.View} templateData={templateData}/>
    </>
}

export default ClientDetails;
