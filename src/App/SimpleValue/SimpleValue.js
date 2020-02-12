import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Attribute = styled.div`
	margin: 5px 0;
	color: #822000;
	line-height: 1.2;
`;

const Label = styled.span`
	font-weight:bold;
`;
class SimpleValue extends React.Component {

	static defaultProps = {
		title: 'TBD title',
		text: 'TBD text'
	  };

    render() {
		return (
			<Attribute>
           		<Label>{this.props.title}: </Label>
            	<span contentEditable>{this.props.text}</span>
        	</Attribute>
		);
    }
};

SimpleValue.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.string
};

export default SimpleValue;