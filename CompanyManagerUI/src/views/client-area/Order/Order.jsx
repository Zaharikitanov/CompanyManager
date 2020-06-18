import React, { useState } from "react";
import { Card, CardBody, Button, Row, Col, TabContent, TabPane, NavItem, NavLink, Form, FormGroup, Input, Nav} from "reactstrap";
import classnames from 'classnames';
import MeasurementsTable from '../../../components/Order/MeasurementsTable';
import FrameInputDetails from '../../../components/Order/FrameInputDetails';
import ContactLenses from '../../../components/Order/ContactLenses';
import Lenses from '../../../components/Order/Lenses';

const Order = () => {

  const [activeTab, setActiveTab] = useState('1');
  
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div className="m-4">
      <Card className="bg-secondary shadow">
        <CardBody>
          <h6 className="heading-small text-muted f-size-16">
              Измервания
          </h6>
          <hr className="my-2" />
          <Form>
            <div className="mt-4">
              <Row>
                <Col m={8} lg={8}>
                  <MeasurementsTable />
                </Col>
              </Row>
              <Button color="success" className="mt-4">Запази</Button>{' '}
            </div>
          </Form>
        </CardBody>
      </Card>
      <Nav tabs className="mt-4">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' }, "p-3")}
            onClick={() => { toggle('1'); }}
          >
            Рамка
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' }, "p-3")}
            onClick={() => { toggle('2'); }}
          >
            Лещи
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' }, "p-3")}
            onClick={() => { toggle('3'); }}
          >
            Контактни Лещи
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="bg-secondary shadow">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className="p-lg-4">
                <FrameInputDetails />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="8">
              <Lenses />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="8">
              <ContactLenses />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Order;
