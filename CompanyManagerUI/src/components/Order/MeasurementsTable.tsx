import React from 'react';
import { Table, Input } from 'reactstrap';

const MeasurementsTable = (props) => {

    const tableHeader = [
        { name: "Sph", length: 5 },
        { name: "Cyl", length: 5 },
        { name: "Ax", length: 3 },
        { name: "Prism", length: 5 },
        { name: "Base", length: 5 },
        { name: "Add", length: 5 },
        { name: "PDfar", length: 5 },
        { name: "PDnear", length: 5 },
        { name: "Vcc", length: 3 }
      ];


    return <Table className="table-border-blue" bordered>
        <thead>
            <tr>
                <th>Създал: Захари Китанов</th>
                {tableHeader.map((data, index) =>
                    <th className="f-size-16" key={index}>{data.name}</th>
                )}
                <th className="f-size-16">Vccbino</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="f-size-16" scope="row">OD</th>
                {tableHeader.map((data, index) =>
                    <td key={index}>
                        <Input
                            className={`${data.name}_od f-size-18`}
                            type="text"
                            maxLength={data.length}
                        />
                    </td>
                )}
                <td rowSpan={2}>
                    <Input
                        className="Vccbino_od f-size-18"
                        type="text"
                        maxLength={3}
                    />
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">OS</th>
                {tableHeader.map((data, index) =>
                    <td key={index}>
                        <Input
                            className={`${data.name}_os f-size-18`}
                            type="text"
                            maxLength={data.length}
                        />
                    </td>
                )}
            </tr>
        </tbody>
    </Table>
}

export default MeasurementsTable;