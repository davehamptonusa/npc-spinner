import React from 'react';
import PropTypes from 'prop-types';
import traitsOptions from '../Character/json/traitsOptions.json';
import { getRandomValue } from '../Utils';
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


class TraitList extends React.Component {

	static defaultProps = {
		title: "TBD Title",
		fields: [{text: 'text', hasLocation: false}]
	  };

    render() {
		return (
			<Attribute>
				<Label>{this.props.title}: </Label>
						<List>
							{this.props.fields.map((value, index) => {
								let location = '';
								if (value.hasLocation === true) {
									let bodyLocation = getRandomValue(traitsOptions.bodyLocations);
									location = ` (location: ${bodyLocation})`;
								}
								return <dd contentEditable key={index}>&nbsp;-&nbsp;{value.text}
									<small>{location}</small></dd>
							})}
						</List>
			</Attribute>
		);




    }
};
TraitList.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.object)
};

export default TraitList;