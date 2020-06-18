import React from 'react';
import { Row, Col, FormGroup, Input } from 'reactstrap';
import { TemplateView } from '../enums/TemplateView';

export type FrameDetails = {
  type: string;
  brand: string;
  model: string;
  number: string;
  vertex: string;
  pantoscopicTilt: string;
  baseCurve: string;
}

export type FrameDimensions = {
  lensDiameter: string;
  bridge: string;
  temple: string;
}

type FrameInputDetailsProps = {
  frameDetails?: FrameDetails;
  frameDimensions?: FrameDimensions;
  viewType: TemplateView;
}

const FrameInputDetails = (props: FrameInputDetailsProps) => {

    const frameDetails = [
        { label: "ТИП", placeholder: "Ацетат/Метал/Корда/Глазант" },
        { label: "МАРКА" },
        { label: "НОМЕР" },
        { label: "ВЕРТЕКС", placeholder: "мм" },
        { label: "ПАНТОСКОПИЧЕН ЪГЪЛ" },
        { label: "КРИВИНА" }
    ];

    const frameDimensions = [
        {label: "Дръжка"},
        {label: "Кръжило"},
        {label: "Наносник"}
    ];

    let frameDetailsArray: Array<string> = props.frameDetails ? Object.values(props.frameDetails) : [];

    let frameDimensionsArray: Array<string> = props.frameDimensions ? Object.values(props.frameDimensions) : [];

    const renderFrameDimensions = (): JSX.Element => {
        switch (props.viewType) {
          case TemplateView.CreateNew: {
            return <>
              {frameDimensions.map((data, index) =>
                <Col lg="4" key={index}>
                    <FormGroup>
                        <label className="form-control-label">
                            {data.label}
                        </label>
                        <Input
                            className="form-control-alternative"
                            type="text"
                        />
                    </FormGroup>
                </Col>
              )}
            </>
          }
          case TemplateView.Edit: {
            return <>
              </>
          }
          case TemplateView.View: {
            return <>
              
            </>
          }
          default: {
            return <span>Template Type Unknown</span>
          }
        }
      }

    return <>
        <h6 className="heading-small text-muted f-size-16 mb-4">
            Размери
        </h6>
        <Row>
            {renderFrameDimensions()}
        </Row>
        <hr className="my-4" />
        <Row>
            {frameDetails.map((data, index) =>
                <Col lg="4" key={index}>
                <FormGroup>
                    <h6 className="heading-small text-muted f-size-16 my-1">
                        {data.label}
                    </h6>
                    <Input
                        className="form-control-alternative"
                        placeholder={data.placeholder}
                        type="text"
                    />
                </FormGroup>
            </Col>
            )}
        </Row>
    </>
}

export default FrameInputDetails;