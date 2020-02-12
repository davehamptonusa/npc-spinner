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
const List = styled.dl`
  margin-top: 0;
  margin-bottom: 8px;
`;

class ListValue extends React.Component {

	static defaultProps = {
		title: 'TBD title',
		fields: [['title', 'text']]
	  };

    render() {
		return (
			<Attribute>
				<Label>{this.props.title}: </Label>
				<List>
					{this.props.fields.map((value, index) => {
						return <dd contentEditable key={index}><strong>&nbsp;-&nbsp;{value[0]}</strong>: {value[1]}</dd>
					})}
				</List>
			</Attribute>
		);
    }
};

ListValue.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default ListValue;