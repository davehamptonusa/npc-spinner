import React from 'react';
import statBar from './stat-block-header-bar.svg'

class StatSeparator extends React.Component {

    render() {
		return (
      <div class="mon-stat-block__separator">
        <img class="mon-stat-block__separator-img" alt="" src={statBar} />
      </div>
		);
    }
};

export default StatSeparator;