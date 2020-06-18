import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const TooltipItem = props => {
    const { item } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);
  
    const toggle = () => setTooltipOpen(!tooltipOpen);
  
    return (
      <span className="ml-1">
        <i className="fas fa-info-circle" id={item.label}></i>
        <Tooltip
          placement="top"
          isOpen={tooltipOpen}
          target={item.label}
          toggle={toggle}
        >
          {item.tooltip}}
        </Tooltip>
      </span>
    );
  };

export default TooltipItem;