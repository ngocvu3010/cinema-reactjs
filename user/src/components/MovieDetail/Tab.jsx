import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const date = props.date;
  const activeTab = props.activeTab;
  const onClick = () => {
    const { date, onClick } = props;
    onClick(date);
  }

  let className = 'tab-list-item';
  if (activeTab === date) {
    className += ' tab-list-active';
  }

  return (
    <li
      className={className}
      onClick={onClick}
    >
      <div className="dayofweek">
          <span className="font-30"> {date} </span>
      </div>
      
    </li>
  );
}

export default Tab;
