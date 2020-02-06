import React from 'react';
import PropTypes from 'prop-types';

class TraitValue extends React.Component {
    constructor(props) {
        super(props);
    }
	static defaultProps = {
		title: 'TBD title',
		text: 'TBD text',
		location: ''  
	  };
    render() {

		var location = this.props.location ? '(location: ' + this.props.location + ')' : '';

		return (
			<div className="simpleValue">
				<div className="row">
					<div className="col-xs-4 col-md-2 text-right">
						<strong>{this.props.title}:&nbsp;</strong>
					</div>
					<div contentEditable className="col-xs-8 col-md-10">
						{this.props.text} <small>{location}</small>
					</div>
				</div>
			</div>
		);
    }
};
TraitValue.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	location: PropTypes.string
};

export default TraitValue;