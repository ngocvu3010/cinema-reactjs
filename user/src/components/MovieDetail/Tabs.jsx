import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.date);
  const [date, setDate] = useState();
  const [children, setChildren] = useState(props.children);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="tabs">
      <ol className="nav nav-tabs dayofweek tab-list">
        {children.map((child) => {
          const { date } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={date}
              date={date}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.date !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );

}
    
export default Tabs;
