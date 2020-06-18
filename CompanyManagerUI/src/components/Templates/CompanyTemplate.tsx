import React, { useState, useEffect } from "react";
import { Row, Col, FormGroup, Input, Card, CardBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { SubscriptionPlan } from '../../components/enums/SubscriptionPlan';
import { TemplateView } from '../../components/enums/TemplateView';
import PageBreadcrumbs, { BreadCrumbItem } from "../PageBreadcrumbs";
import { CreateItem, DeleteItem, UpdateItem } from "../../helpers/requests";
import { undefinedChecker } from "../../helpers/Checkers";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate } from "../../helpers/Formatters";

export type CompanyDetailsData = {
  id: string;
  companyName: string;
  brandName: string;
  ownerName: string;
  companyRegistrationNumber: string;
  ownerPhoneNumber?: number;
  contractSignDate: string;
  subscriptionDueDate: Date;
  paymentPlan: string;
  email: string;
}

type CompanyTemplateProps = {
  templateData?: CompanyDetailsData;
  viewType: TemplateView;
}

const CompanyTemplate = (props?: CompanyTemplateProps): JSX.Element => {

  const breadcrumbs: Array<BreadCrumbItem> = [
    {label: "Фирма"}
  ];

  let subscriptionPlanArray = Object.values(SubscriptionPlan);
  const [dropdownOpen, setOpen] = useState(false);
  const [companyData, setCompanyData] = useState({} as CompanyDetailsData);
  const inputData = props.templateData;

  const inputLabels = [
    { label: "Име на фирмата", value: undefinedChecker(inputData, "companyName"), newValue: (newValue) => setCompanyData({ ...companyData, companyName: newValue}) },
    { label: "Име на бранда", value: undefinedChecker(inputData, "brandName"), newValue: (newValue) => setCompanyData({ ...companyData, brandName: newValue}) },
    { label: "Лице за контакт", value: undefinedChecker(inputData, "ownerName"), newValue: (newValue) => setCompanyData({ ...companyData, ownerName: newValue}) },
    { label: "ЕИК", value: undefinedChecker(inputData, "companyRegistrationNumber"), newValue: (newValue) => setCompanyData({ ...companyData, companyRegistrationNumber: newValue}) },
    { label: "Телефон", value: undefinedChecker(inputData, "ownerPhoneNumber"), newValue: (newValue) => setCompanyData({ ...companyData, ownerPhoneNumber: newValue}) },
    { label: "Мейл адрес", value: undefinedChecker(inputData, "email"), newValue: (newValue) => setCompanyData({ ...companyData, email: newValue}) },
  ];

  useEffect(() => {
    if (props.viewType == TemplateView.Edit){
      setCompanyData(inputData);
    }
    if (props.viewType == TemplateView.CreateNew){
      setCompanyData({ ...companyData, paymentPlan: SubscriptionPlan.Basic})
    }
  },[]);

  const toggle = () => setOpen(!dropdownOpen);

  const renderFields = (): JSX.Element => {
    switch(props.viewType) { 
      case TemplateView.CreateNew: { 
         return <>
         {inputLabels.map((data, index) =>
            <Col lg="4" key={index}>
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  {data.label}
                </h6>
                <Input
                  className="form-control-alternative"
                  type="text"
                  onChange={e => data.newValue(e.target.value)}
                />
              </FormGroup>
            </Col>
          )}
          <Col lg="4">
            <FormGroup>
              <h6 className="heading-small text-muted f-size-16 my-1">
                Дата на следващо плащане
              </h6>
              <DayPickerInput 
                placeholder={"DD/MM/YYYY"}
                value={companyData.subscriptionDueDate ? formatDate(companyData.subscriptionDueDate) : ""}
                onDayChange={day => setCompanyData({ ...companyData, subscriptionDueDate: day})} />
            </FormGroup> 
          </Col>
        </> 
      } 
      case TemplateView.Edit: { 
        return <>
        {inputLabels.map((data, index) => 
          <Col lg="4" key={index}>
            <FormGroup>
              <h6 className="heading-small text-muted f-size-16 my-1">
                {data.label}
              </h6>
              <Input
                className="form-control-alternative"
                type="text"
                defaultValue={data.value}
                onChange={e => data.newValue(e.target.value)}
              />
            </FormGroup>
          </Col>
        )}
        <Col lg="4">
          <FormGroup>
            <h6 className="heading-small text-muted f-size-16 my-1">
              Дата на следващо плащане
            </h6>
            <DayPickerInput 
              value={formatDate(companyData.subscriptionDueDate)}
              onDayChange={day => setCompanyData({ ...companyData, subscriptionDueDate: day})} />
          </FormGroup> 
        </Col>
        </> 
      } 
      case TemplateView.View: { 
        return <>
        {inputLabels.map((data, index) =>
          <Col lg="4" key={index}>
            <FormGroup>
              <h6 className="heading-small text-muted f-size-16 my-1">
                {data.label}
              </h6>
              <hr className="my-1" />
              <span>{data.value}</span>
            </FormGroup>
          </Col>
        )}
        <Col lg="4">
          <FormGroup>
            <h6 className="heading-small text-muted f-size-16 my-1">
              Дата на следващо плащане
            </h6>
            <hr className="my-1" />
            <span>{formatDate(inputData.subscriptionDueDate)}</span>
          </FormGroup> 
        </Col>
        </> 
      } 
      default: { 
        return <span>Template Type Unknown</span>
      } 
   } 
  }

  const saveDataObject = () => {
    CreateItem(companyData, "company");
  }  

  const updateDataObject = () => {
    UpdateItem(companyData, "company");
  }

  const deleteDataObject = () => {
    DeleteItem(`company/${companyData.id}`);
  }  
  
  const renderButtons = (): JSX.Element => {
    switch(props.viewType) { 
      case TemplateView.CreateNew: { 
         return <>
         <RedirectButton buttonColor="success" buttonText="Запази" url={AdminRoute.Index} callback={saveDataObject}/>
         </> 
      } 
      case TemplateView.Edit: { 
        return <>
        <RedirectButton buttonColor="success" buttonText="Запази" url={AdminRoute.CompanyDetails} callback={updateDataObject}/>
        <RedirectButton buttonColor="danger" buttonText="Изтрий Фирмата" url={AdminRoute.Index} callback={deleteDataObject}/>
        </> 
      } 
      case TemplateView.View: { 
        return <>
        <RedirectButton buttonColor="success" buttonText="Добави Обект" url={AdminRoute.AddFacility} dataObjectId={inputData.id}/>
        </> 
      } 
      default: { 
        return <span>Template Type Unknown</span>
      } 
    } 
  }

  return <>
    <PageBreadcrumbs breadcrumbsList={breadcrumbs}/>
    <Card className="bg-secondary shadow mt-2">
      <CardBody>
        <h6 className="heading-small f-size-16">
          Детайли на фирмата
          {props.viewType === TemplateView.View && 
            <RedirectButton className="optileader-teal-background white-font-color ml-4" buttonText="Редактирай" url={AdminRoute.EditCompany} />
          }
        </h6>
        {props 
        ?
        <>
          <Row className="mt-4">
            {renderFields()}
            <Col lg="4">
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  Вид абонамент
                </h6>
                {props.viewType === TemplateView.View ?
                <>  
                  <hr className="my-1" />
                  <span>{inputData.paymentPlan}</span>
                </>
                :
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret className="px-5 optileader-teal-background white-font-color">
                    {props.viewType === TemplateView.Edit
                    ? <>{companyData.paymentPlan}</>
                    : <>{companyData.paymentPlan ? companyData.paymentPlan : "Избери"}</>
                    }
                  </DropdownToggle>
                  <DropdownMenu>
                  {subscriptionPlanArray.map((data, index) =>
                    <DropdownItem key={index} onClick={() => setCompanyData({ ...companyData, paymentPlan: data})}>{data}</DropdownItem>
                  )}
                  </DropdownMenu>
                </ButtonDropdown>
                }
              </FormGroup>
            </Col>
          </Row>
          {renderButtons()}
        </>
        :
        <h1>No Data</h1>
        }
      </CardBody>
    </Card>
  </>
}

export default CompanyTemplate;
