import React from 'react';
import PropTypes from 'prop-types';

class SimpleValue extends React.Component {

	static defaultProps = {
		title: 'TBD title',
		text: 'TBD text'
	  };

    render() {
		return (
			<div class="mon-stat-block__attribute">
           		<span class="mon-stat-block__attribute-label">{this.props.title}: </span>
            	<span class="mon-stat-block__attribute-data">
					<span class="mon-stat-block__attribute-data-value">
					{this.props.text}    
					</span>
            	</span>
        	</div>
		);
    }
};

SimpleValue.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.string
};

export default SimpleValue;