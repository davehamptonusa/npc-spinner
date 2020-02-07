import React from 'react';
import PropTypes from 'prop-types';

class SimpleValue extends React.Component {

	static defaultProps = {
		title: 'TBD title',
		text: 'TBD text'
	  };

    render() {
		return (
			<div className="simpleValue">
				<div className="row">
					<div className="col-xs-4 col-md-2 text-right">
						<strong>{this.props.title}:&nbsp;</strong>
					</div>
					<div contentEditable className="col-xs-8 col-md-10">
						{this.props.text}
					</div>
				</div>
			</div>
		);
    }
};

SimpleValue.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.string
};

export default SimpleValue;