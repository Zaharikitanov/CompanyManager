import React from 'react';
import CustomerTemplate from '../../../components/Templates/CustomerTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';

const EditClient = (props) => {

  const templateData = {
    clientName: "Ралица Чолакова",
    email: "r.cholakova@gmail.com",
    phone: "0898 900 800",
  }

  return <>
    <CustomerTemplate viewType={TemplateView.Edit} templateData={templateData} />
  </>
}

export default EditClient;