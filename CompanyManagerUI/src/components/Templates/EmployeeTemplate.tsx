import React, { useState, useEffect } from "react";
import { Row, Col, Button, FormGroup, Input, Card, CardBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { TemplateView } from '../enums/TemplateView';
import { EmployeeRole } from '../enums/EmployeeRole';
import PageBreadcrumbs, { BreadCrumbItem } from "../PageBreadcrumbs";
import { undefinedChecker } from "../../helpers/Checkers";
import { CreateItem, UpdateItem, DeleteItem } from "../../helpers/requests";

export type EmployeeDetailsData = {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  role?: EmployeeRole;
  companyId: string;
  facilityId: string;
  id?: string;
  profileStatus?: ProfileStatus;
}

export enum ProfileStatus {
  Active = "Active",
  Deactivated = "Deactivated"
}

type EmployeeTemplateProps = {
  templateData?: EmployeeDetailsData;
  viewType: TemplateView;
}

const EmployeeTemplate = (props: EmployeeTemplateProps): JSX.Element => {

  const inputData = props.templateData;
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [employeeData, setEmployeeData] = useState({} as EmployeeDetailsData);
  let employeeRolesArray = Object.values(EmployeeRole);
  
  const breadcrumbs: Array<BreadCrumbItem> = [
      {label: "Фирма", url: AdminRoute.CompanyDetails, objectId: inputData.companyId},
      {label: "Обект", url: AdminRoute.OfficeDetails, objectId: inputData.facilityId},
      {label: "Служител"}
  ];

  const employeeDetails = [
    { label: "Име", value: undefinedChecker(inputData, "name"), newValue: (newValue) => setEmployeeData({ ...employeeData, name: newValue}) },
    { label: "Имейл", value: undefinedChecker(inputData, "email"), newValue: (newValue) => setEmployeeData({ ...employeeData, email: newValue}) },
    { label: "Телефон", value: undefinedChecker(inputData, "phone"), newValue: (newValue) => setEmployeeData({ ...employeeData, phone: newValue}) },
  ];

  useEffect(() => {
    if (props.viewType == TemplateView.Edit){
      setEmployeeData(inputData);
    }
    if (props.viewType == TemplateView.CreateNew){
      setEmployeeData({ ...employeeData,
        role: EmployeeRole.Employee,
        companyId: inputData.companyId,
        facilityId: inputData.facilityId,
        profileStatus: ProfileStatus.Active
      });
    }
  },[]);

  
  const renderFields = (): JSX.Element => {
    switch (props.viewType) {
      case TemplateView.CreateNew: {
        return <>
          {employeeDetails.map((data, index) =>
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
                  Парола
                </h6>
                <Input
                  className="form-control-alternative"
                  type="text"
                  onChange={e => setEmployeeData({ ...employeeData, password: e.target.value})}
                />
              </FormGroup>
            </Col></>
      }
      case TemplateView.Edit: {
        return <>
          {employeeDetails.map((data, index) =>
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
          {employeeDetails.map((data, index) =>
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
                  Статус
                </h6>
                <hr className="my-1" />
                <span>{inputData.profileStatus}</span>
              </FormGroup>
            </Col></>
      }
      default: {
        return <span>Template Type Unknown</span>
      }
    }
  }

  const saveDataObject = () => {
    CreateItem(employeeData, "employee");
  }  

  const updateDataObject = () => {
    UpdateItem(employeeData, "employee");
  }

  const deleteDataObject = () => {
    DeleteItem(`employee/${employeeData.id}`);
  }  

  const renderButtons = (): JSX.Element => {
    switch (props.viewType) {
      case TemplateView.CreateNew: {
        return <>
          <RedirectButton buttonColor="success" buttonText="Запази" url={AdminRoute.OfficeDetails} callback={saveDataObject} dataObjectId={inputData.facilityId}/>
        </>
      }
      case TemplateView.Edit: {
        return <>
          <RedirectButton buttonColor="success" buttonText="Запази" url={AdminRoute.OfficeDetails} callback={updateDataObject} dataObjectId={inputData.facilityId}/>
          <RedirectButton buttonColor="danger" buttonText="Изтрий Служителя" url={AdminRoute.OfficeDetails} callback={deleteDataObject} dataObjectId={inputData.facilityId}/>
        </>
      }
      case TemplateView.View: {
        return <></>
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
          Детайли на служителя
          {props.viewType === TemplateView.View &&
            <RedirectButton className="teal-background white-font-color ml-4" buttonText="Редактирай" url={AdminRoute.EditEmployee} />
          }
        </h6>

        <Row className="mt-4">
          {renderFields()}
          <Col lg="4">
            <FormGroup>
              <h6 className="heading-small text-muted f-size-16 my-1">
                Позиция във фирмата
              </h6>
              {props.viewType === TemplateView.View ?
                <>
                  <hr className="my-1" />
                  <span>{inputData.role}</span>
                </>
                :
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret className="px-5 teal-background white-font-color">
                  {props.viewType === TemplateView.Edit
                    ? <>{employeeData.role}</>
                    : <>{employeeData.role ? employeeData.role : "Избери"}</>
                    }
                  </DropdownToggle>
                  <DropdownMenu>
                    {employeeRolesArray.map((data, index) =>
                      <DropdownItem key={index} onClick={() => setEmployeeData({ ...employeeData, role: data})}>{data}</DropdownItem>
                    )}
                  </DropdownMenu>
                </ButtonDropdown>
              }
            </FormGroup>
          </Col>
        </Row>
        {renderButtons()}
      </CardBody>
    </Card>
  </>
}

export default EmployeeTemplate;
