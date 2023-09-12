import React, { useEffect, useState } from 'react';
import {useCollapse, getCollapseProps, getToggleProps, isExpanded} from 'react-collapsed';
import './Dropdown.css'

export default function Dropdown( props ) {
    useEffect(() => {
        getValues();
    })
    const getValues = () => {
        console.log()
    }

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>{props.header}</div>
        <div {...getCollapseProps()}>
            <div className="content">
                {React.Children.map(props.children, (child, index) => {return <ul>{child}</ul>})}
            </div>
        </div>
    </div>
    );
};
