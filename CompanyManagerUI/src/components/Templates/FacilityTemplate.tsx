import React, { useState, useEffect } from "react";
import { Row, Col, FormGroup, Input, Card, CardBody} from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { TemplateView } from '../enums/TemplateView';
import PageBreadcrumbs, { BreadCrumbItem } from '../../components/PageBreadcrumbs';
import { CreateItem, UpdateItem, DeleteItem } from "../../helpers/requests";
import { undefinedChecker } from "../../helpers/Checkers";

export type FacilityDetailsData = {
  id?: string;
  companyId: string;
  facilityName?: string;
  managerName?: string;
  phone?: number;
  facilityAddress?: string;
}

type FacilityTemplateProps = {
  templateData?: FacilityDetailsData;
  viewType: TemplateView;
}

const FacilityTemplate = (props: FacilityTemplateProps): JSX.Element => {

  const [facilityData, setFacilityData] = useState({} as FacilityDetailsData);
  const inputData = props.templateData;

  useEffect(() => {
    if (props.viewType == TemplateView.Edit){
      setFacilityData(inputData);
    }

    if (props.viewType == TemplateView.CreateNew){
      setFacilityData({ ...facilityData,
        companyId: inputData.companyId
      });
    }
  },[]);

  const breadcrumbs: Array<BreadCrumbItem> = [
    {label: "Фирма", url: AdminRoute.CompanyDetails, objectId: inputData.companyId},
    {label: "Обект"}
  ];

  const inputLabels = [
    { label: "Име на обекта", value: undefinedChecker(inputData, "facilityName"), newValue: (newValue) => setFacilityData({ ...facilityData, facilityName: newValue}) },
    { label: "Лице за контакт", value: undefinedChecker(inputData, "managerName"), newValue: (newValue) => setFacilityData({ ...facilityData, managerName: newValue})},
    { label: "Телефон", value: undefinedChecker(inputData, "phone"), newValue: (newValue) => setFacilityData({ ...facilityData, phone: newValue})},
    { label: "Адрес", value: undefinedChecker(inputData, "facilityAddress"), newValue: (newValue) => setFacilityData({ ...facilityData, facilityAddress: newValue})},
  ];

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
          )}</> 
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
        )}</> 
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
        )}</> 
      } 
      default: { 
        return <span>Template Type Unknown</span>
      } 
   } 
  }

  const saveDataObject = () => {
    CreateItem(facilityData, "facility");
  }  

  const updateDataObject = () => {
    UpdateItem(facilityData, "facility");
  }

  const deleteDataObject = () => {
    DeleteItem(`facility/${facilityData.id}`);
  }  

  const renderButtons = (): JSX.Element => {
    switch(props.viewType) { 
      case TemplateView.CreateNew: { 
         return <>
          <RedirectButton buttonColor="success" buttonText="Запази" url={AdminRoute.CompanyDetails} callback={saveDataObject} dataObjectId={inputData.companyId}/>
         </> 
      } 
      case TemplateView.Edit: { 
        return <>
         <RedirectButton buttonColor="success" buttonText="Запази" url={AdminRoute.OfficeDetails} callback={updateDataObject} dataObjectId={inputData.id}/>
         <RedirectButton buttonColor="danger" buttonText="Изтрий Обекта" url={AdminRoute.CompanyDetails} callback={deleteDataObject} dataObjectId={inputData.companyId}/>
        </> 
      } 
      case TemplateView.View: { 
        return <>
        <RedirectButton buttonColor="success" buttonText="Добави Служител" url={AdminRoute.AddEmployee} dataObjectId={{companyId: inputData.companyId, facilityId: inputData.id}}/>
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
          Детайли на обекта
          {props.viewType === TemplateView.View && 
            <RedirectButton className="teal-background white-font-color ml-4" buttonText="Редактирай" url={AdminRoute.EditFacility} dataObjectId={inputData.id}/>
          }
        </h6>
        <Row className="mt-4">
          {renderFields()}
        </Row>
        {renderButtons()}
      </CardBody>
    </Card>
  </>
}

export default FacilityTemplate;