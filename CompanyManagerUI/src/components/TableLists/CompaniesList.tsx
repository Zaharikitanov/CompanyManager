import React from "react";
import { Card, Table, Button } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { formatDate } from "../../helpers/Formatters";

export type CompanyListItem = {
  id: string;
  name: string;
  createdAt: string;
  officesAmount: number;
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
              <th className="f-size-16" scope="col">Name</th>
              <th className="f-size-16" scope="col">Offices</th>
              <th className="f-size-16" scope="col">Created At</th>
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
                      className="teal-background white-font-color" 
                      buttonText="Details" 
                      url={AdminRoute.CompanyDetails}
                      dataObjectId={data.id}/>
                  </td>
                  <td className="f-size-16">{data.name}</td>
                  <td className="f-size-16">{data.officesAmount}</td>
                  <td className="f-size-16">{formatDate(data.createdAt, 'DD/MM/YYYY')}</td>
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
