import React from "react";
import { Row, Col, Button, FormGroup, Input, Card, CardBody } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute, SharedRoute } from '../../routes';
import { TemplateView } from '../enums/TemplateView';
import { UserRole } from '../enums/UserRole';
import GetUserRole from '../../helpers/GetUserRole';

export type CustomerTemplateData = {
  clientName: string;
  phone: string;
  email: string;
  details?: string;
}

type CustomerTemplateProps = {
  templateData?: CustomerTemplateData;
  viewType: TemplateView;
}

const CustomerTemplate = (props: CustomerTemplateProps): JSX.Element => {

  const frameDetails = [
    { label: "Имена" },
    { label: "Телефон" },
    { label: "Имейл" },
  ];

  let templateDataPropertiesArray: Array<string> = props.templateData ? Object.values(props.templateData) : [];

  const renderFields = (): JSX.Element => {
    switch (props.viewType) {
      case TemplateView.CreateNew: {
        return <>
          {frameDetails.map((data, index) =>
            <Col lg={4} key={index}>
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  {data.label}
                </h6>
                <Input
                  className="form-control-alternative"
                  type="text"
                />
              </FormGroup>
            </Col>
          )}
          <Col lg={4}>
            <FormGroup>
              <label>Допълнителна Информация</label>
              <Input
                className="form-control-alternative"
                rows="4"
                defaultValue="Тук можете да опишете специфични особености на клиента."
                type="textarea"
              />
            </FormGroup>
          </Col>
        </>
      }
      case TemplateView.Edit: {
        return <>
          {frameDetails.map((data, index) =>
            <Col lg="4" key={index}>
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  {data.label}
                </h6>
                <Input
                  className="form-control-alternative"
                  type="text"
                  defaultValue={templateDataPropertiesArray[index]}
                />
              </FormGroup>
            </Col>
          )}</>
      }
      case TemplateView.View: {
        return <>
          {frameDetails.map((data, index) =>
            <Col lg="4" key={index}>
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  {data.label}
                </h6>
                <hr className="my-1" />
                <span>{templateDataPropertiesArray[index]}</span>
              </FormGroup>
            </Col>
          )}
          <Col lg={4}>
            <FormGroup>
              <label>Допълнителна Информация</label>
              <Input
                className="form-control-alternative"
                rows="4"
                defaultValue={props.templateData.details}
                type="textarea"
              />
            </FormGroup>
          </Col>
        </>
      }
      default: {
        return <span>Template Type Unknown</span>
      }
    }
  }

  const renderButtons = (): JSX.Element => {
    switch (props.viewType) {
      case TemplateView.CreateNew: {
        return <>
          <Button color="success">Запази</Button>{' '}
        </>
      }
      case TemplateView.Edit: {
        return <>
          <Button color="success">Запази</Button>{' '}
          <Button color="danger">Изтрий Клиент</Button>{' '}
        </>
      }
      case TemplateView.View: {
        return <>
          {GetUserRole() === UserRole.Client &&
            <RedirectButton buttonColor="success" buttonText="Добави Поръчка" url={AdminRoute.AddFacility} />
          }</>
      }
      default: {
        return <span>Template Type Unknown</span>
      }
    }
  }

  return <>
    <Card className="bg-secondary shadow mt-2">
      <CardBody>
        <h6 className="heading-small f-size-16">
          Детайли на клиента
          {props.viewType === TemplateView.View &&
            <RedirectButton className="optileader-teal-background white-font-color ml-4" buttonText="Редактирай" url={SharedRoute.EditClient} />
          }
        </h6>
        <Row className="mt-4">
          {renderFields()}
        </Row>
        <Row>
          {renderButtons()}
        </Row>
      </CardBody>
    </Card>
  </>
}

export default CustomerTemplate;
