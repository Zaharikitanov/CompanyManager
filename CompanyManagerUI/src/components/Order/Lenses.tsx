import React, { useState } from 'react';
import { Table, Input, Button, ButtonGroup } from 'reactstrap';
import TooltipItem from '../TooltipItem';

const Lenses = (props) => {

    const manufacturer = ["Маска", "Optiswiss", "Essilor", "Zeiss", "Hoya", "Rodenstock", "Novacell"];
    const material = ["Минерал", "1.5", "1.56", "1.6", "1.67", "1.74", "Поликарбонат", "Тривекс"];
    const design = [
        {label: "Сферичен", tooltip: null}, 
        {label: "Асферичен", tooltip: "Задължително вземете височина на пупилата! Асферичните лещи се децентрират 3мм под височината на пупилата! децентрирането може да варира в зависимост от вертекса и пантоскопичния ъгъл. За подробности вижте инструкциите на производителя!"},
        {label: "ДвеАсферичен", tooltip: "Задължително вземете височина на пупилата! Асферичните лещи се децентрират 3мм под височината на пупилата! децентрирането може да варира в зависимост от вертекса и пантоскопичния ъгъл. За подробности вижте инструкциите на производителя!"},
        {label: "Фрийформ", tooltip: "задължително вземето моноколярно ПД, височина на пупилата, според вида на продукта може да е нужен вертекс и пантоскопичен ъгъл! за повече информация вижте инструкциите на производителя!"}
    ];
    const type = [
        {label: "Еднофокусни", tooltip: null},
        {label: "Офисни", tooltip: "Нужна е моноколявно ПД за близо, вертикалата се центрира по геометричен център! за повече информация погледнете инструкциите на производителя!"},
        {label: "Дегресив", tooltip: "необходими са моноколярно ПД за далече, височина на пупилата, пантоскопичен ъгъл поне 6 градуса. отбележете желаната добавка според каталога на производителя, обикновено са +0,25,+0,50 или +0,75"},
        {label: "Прогресив", tooltip: "необходими са моноколярно ПД за далече и за близо. Височина на пупилата. вертекс и пантоскопичен ъгъл,при аномалии с тях, изберете по-висок клас прогресив и отбележете особеностите. хубаво е да отбележете приоритетна дистанция. изберете дължина на коридора - повечето продукти предлагат няколко. за повече информация вижте каталога на производителя."},
        {label: "Бифокал", tooltip: "необходими са ПД за далече и височина на долния клепач. при изработка ПДто се децентрира 4мм назално на око(проверете инструкциите на производителя)"}
    ];
    const coloring = ["Сиво", "Кафяво", "Зелено"];
    const diameter = [
        {label: "Ø55", tooltip: "проверете дали производителя поддържа желаният диаметър"},
        {label: "Ø60", tooltip: "проверете дали производителя поддържа желаният диаметър"},
        {label: "Ø65", tooltip: null},
        {label: "Ø70", tooltip: "проверете дали производителя поддържа желаният диаметър"},
        {label: "Ø75", tooltip: "проверете дали производителя поддържа желаният диаметър"},
        {label: "Ø80", tooltip: "проверете дали производителя поддържа желаният диаметър"},
    ];

    const [manufacturerName, setManufacturerName] = useState(null);
    const [materialType, setMaterialType] = useState(null);
    const [designType, setDesignType] = useState(null);
    const [lenseType, setLenseType] = useState(null);
    const [lenseColoring, setLenseColoring] = useState(null);
    const [diameterSize, setDiameterSize] = useState(null);

    return <Table className="table-border-blue m-5" bordered>
        <tbody>
            <tr>
                <th className="f-size-16" scope="row">Производител</th>
                <td colSpan={7}>
                <ButtonGroup className="d-flex justify-content-around manufacturer-buttons">
                    {manufacturer.map((name, index) =>
                        <Button 
                            key={index}
                            color="primary" 
                            onClick={() => setManufacturerName(name)} 
                            active={manufacturerName === name}>
                            {name}
                        </Button>
                    )}
                </ButtonGroup>
                </td>
                <td >
                    <Input
                        className={`f-size-18`}
                        type="text"
                        placeholder="Друг"
                    />
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Материал</th>
                <td colSpan={8}>
                    <ButtonGroup className="d-flex justify-content-around">
                        {material.map((name, index) =>
                            <Button 
                                key={index}
                                color="primary" 
                                onClick={() => setMaterialType(name)} 
                                active={materialType === name}>
                                {name}
                            </Button>
                        )}
                    </ButtonGroup>
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Дизайн</th>
                <td colSpan={8}>
                    <ButtonGroup className="d-flex justify-content-around">
                        {design.map((data, index) =>
                            <Button 
                                key={index}
                                color="primary" 
                                onClick={() => setDesignType(data.label)} 
                                active={designType === data.label}>
                                {data.label}
                                {data.tooltip && 
                                    <TooltipItem item={data} />
                                }
                            </Button>
                        )}
                    </ButtonGroup>
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Вид</th>
                <td colSpan={8}>
                    <ButtonGroup className="d-flex justify-content-around">
                        {type.map((data, index) =>
                            <Button 
                                key={index}
                                color="primary" 
                                onClick={() => setLenseType(data.label)} 
                                active={lenseType === data.label}>
                                {data.label}
                                {data.tooltip && 
                                    <TooltipItem item={data} />
                                }
                            </Button>
                        )}
                    </ButtonGroup>
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Продукт</th>
                <td colSpan={8}>
                    <Input
                        className={`f-size-18`}
                        type="text"
                    />
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Покритие</th>
                <td colSpan={8}>
                    <Input
                        className={`f-size-18`}
                        type="text"
                    />
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Фото. Технология</th>
                <td colSpan={8}>
                    <Input
                        className={`f-size-18`}
                        type="text"
                    />
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Оцветяване</th>
                <td colSpan={7}>
                    <ButtonGroup className="d-flex justify-content-around">
                        {coloring.map((name, index) =>
                            <Button 
                                key={index}
                                color="primary" 
                                onClick={() => setLenseColoring(name)} 
                                active={lenseColoring === name}>
                                {name}
                            </Button>
                        )}
                    </ButtonGroup>
                </td>
                <td>
                    <Input
                        className={`f-size-18`}
                        type="text"
                        placeholder="Други"
                    />
                </td>
            </tr>
            <tr>
                <th className="f-size-16" scope="row">Диаметър</th>
                <td colSpan={8}>
                    <ButtonGroup className="d-flex justify-content-around">
                        {diameter.map((data, index) =>
                            <Button 
                                key={index}
                                color="primary" 
                                onClick={() => setDiameterSize(data.label)} 
                                active={diameterSize === data.label}>
                                {data.label}
                                 {data.tooltip && 
                                    <TooltipItem item={data} />
                                }
                            </Button>
                        )}
                    </ButtonGroup>
                </td>
            </tr>
        </tbody>
    </Table>
}

export default Lenses;