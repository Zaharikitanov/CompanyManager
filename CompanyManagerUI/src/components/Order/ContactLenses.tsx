import React, { useState } from 'react';
import { Table, Input, Button, ButtonGroup } from 'reactstrap';
import TooltipItem from '../TooltipItem';

const ContactLenses = (props) => {

    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);


    const tableHeader = [
        {label: "sph", tooltip: "до +/-3dpt не се преизчислява,проверете начина на преизчисляване според производителя"},
        {label: "cyl", tooltip: "проверете начина на преизчисляване според производителя, желателно е компетентно напасване на торични контактни лещи"},
        {label: "ax", tooltip: "проверете на какви градуси работи производителя, препоръчително е компетентно напасване на контактни лещи"},
        {label: "add", tooltip: "проверете вида на добавките според производителя, желателно е компетентно напасване"}
    ];

    const product = {
        label: "Продукт", tooltip: "всеки вид контактни лещи има параметри: базова кривина и диаметър"
    }

    const periods = [
        {label: "threeMonth", tooltip: "не е препоръчително носене за повече от 6 часа дневно, ако клиентът смята да ползва лещите на 6часа дневно, препоръчайте месечни или еднодневни контактни лещи! има риск от хипоксия!"},
        {label: "yearly", tooltip: "не е препоръчително носене за повече от 6 часа дневно, ако клиентът смята да ползва лещите на 6часа дневно, препоръчайте месечни или еднодневни контактни лещи! има риск от хипоксия!"}
    ];

    return <Table className="table-border-blue m-5" bordered>
        <thead>
            <tr>
                <th></th>
                {tableHeader.map((data, index) =>
                    <th className="f-size-16" key={index}>
                        {data.label} 
                        <TooltipItem item={data} />
                    </th>
                )}
            </tr>
        </thead>
        <tbody>
            <tr>
                <th className="f-size-16" scope="row">OD</th>
                {tableHeader.map((data, index) =>
                    <td key={index}>
                        <Input
                            className={`${data.label}_od f-size-18`}
                            type="text"
                            maxLength="5"
                        />
                    </td>
                )}
            </tr>
            <tr>
                <th className="f-size-16" scope="row">OS</th>
                {tableHeader.map((data, index) =>
                    <td key={index}>
                        <Input
                            className={`${data.label}_os f-size-18`}
                            type="text"
                            maxLength={6}
                        />
                    </td>
                )}
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Период</th>
                <td colSpan={4}>
                <ButtonGroup className="d-flex justify-content-around contact-lenses-buttons">
                    <Button color="primary" onClick={() => setSelectedPeriod(1)} active={selectedPeriod === 1}>дневна</Button>
                    <Button color="primary" onClick={() => setSelectedPeriod(2)} active={selectedPeriod === 2}>месечна</Button>
                    <Button color="primary" onClick={() => setSelectedPeriod(3)} active={selectedPeriod === 3}>3 месечна <TooltipItem item={periods[0]} /></Button>
                    <Button color="primary" onClick={() => setSelectedPeriod(4)} active={selectedPeriod === 4}>годишна <TooltipItem item={periods[1]} /></Button>
                </ButtonGroup>
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Производител</th>
                <td colSpan={4}>
                <ButtonGroup className="d-flex justify-content-around contact-lenses-buttons">
                    <Button color="primary" onClick={() => setSelectedBrand(1)} active={selectedBrand === 1}>Alcon</Button>
                    <Button color="primary" onClick={() => setSelectedBrand(2)} active={selectedBrand === 2}>Cooper Vision</Button>
                    <Button color="primary" onClick={() => setSelectedBrand(3)} active={selectedBrand === 3}>B & L</Button>
                    <Button color="primary" onClick={() => setSelectedBrand(4)} active={selectedBrand === 4}>CMI</Button>
                </ButtonGroup>
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">
                    {product.label}
                    <TooltipItem item={product} />
                </th>
                <td colSpan={4}>
                    <Input
                        className={`f-size-18`}
                        type="text"
                    />
                </td>
            </tr>
        </tbody>
    </Table>
}

export default ContactLenses;