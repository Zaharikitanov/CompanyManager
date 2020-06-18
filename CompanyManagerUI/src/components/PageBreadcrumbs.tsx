import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import RedirectButton from './Buttons/RedirectButton';

export type BreadCrumbItem = {
    label: string;
    url?: string;
    objectId?: string;
}

type PageBreadcrumbsProps = {
    breadcrumbsList: Array<BreadCrumbItem>;
}

const PageBreadcrumbs = (props: PageBreadcrumbsProps) => {

  return <>
      <Breadcrumb className="transparent-background mt-2">
        {props.breadcrumbsList.map((breadcrumb, index) => {
            return breadcrumb.url 
                ?  
                (<BreadcrumbItem key={index}>
                        <RedirectButton 
                            className="p-0 mb-1"
                            buttonColor="link" 
                            buttonText={breadcrumb.label} 
                            url={breadcrumb.url} 
                            dataObjectId={breadcrumb.objectId}/>
                    </BreadcrumbItem>)
                :  
                (<BreadcrumbItem key={index} active>{breadcrumb.label}</BreadcrumbItem>)
            }
        )}
      </Breadcrumb>
    </>
};

export default PageBreadcrumbs;