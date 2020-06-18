import React from "react";
import { Card, Table, Button } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { formatDate } from "../../helpers/Formatters";

export type CompanyListItem = {
  id: string;
  companyName: string;
  facilitiesAmount: number;
  employeesAmount: number;
  ordersAmount: number;
  subscriptionDueDate: string;
  isCompanyActive: boolean;
}

type CompaniesListProps = {
    listData: Array<CompanyListItem>
}

const CompaniesList = (props: CompaniesListProps): JSX.Element => {

  return <>
      <Card className="mt-4">
        <Table className="align-items-center table-flush table-striped" responsive>
          <thead className="silver-background black-font-color">
            <tr className="text-center">
              <th className="f-size-16" scope="col"></th>
              <th className="f-size-16" scope="col">Фирма</th>
              <th className="f-size-16" scope="col">Брой Обекти</th>
              <th className="f-size-16" scope="col">Брой Профили</th>
              <th className="f-size-16" scope="col">Брой Поръчки</th>
              <th className="f-size-16" scope="col">Дата на изтичане</th>
              <th className="f-size-16" scope="col">Достъп</th>
            </tr>
          </thead>
          <tbody>
            {props.listData 
            ?
            <>
              {props.listData.map((data, index) =>
                <tr className="text-center" key={index} >
                  <td>
                    <RedirectButton 
                      className="optileader-teal-background white-font-color" 
                      buttonText="Детайли" 
                      url={AdminRoute.CompanyDetails}
                      dataObjectId={data.id}/>
                  </td>
                  <td className="f-size-16">{data.companyName}</td>
                  <td className="f-size-16">{data.facilitiesAmount}</td>
                  <td className="f-size-16">{data.employeesAmount}</td>
                  <td className="f-size-16">{data.ordersAmount}</td>
                  <td className="f-size-16">{formatDate(data.subscriptionDueDate, 'DD/MM/YYYY')}</td>
                  <td className="f-size-16">
                    {data.isCompanyActive
                    ?
                    <Button color="danger" className="ml-4">Спри Достъп</Button>
                    :
                    <Button color="success" className="ml-4">Активирай</Button>
                    }
                  </td>
                </tr>
              )}
            </>
            :
            <tr>
              <td colSpan={7} className="text-center"><h4>No Data</h4></td>
            </tr>

            }
            
          </tbody>
        </Table>
      </Card>
  </>
}

export default CompaniesList;
