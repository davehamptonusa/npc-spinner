import React from 'react';
import PropTypes from 'prop-types';
import traitsOptions from './json/traitsOptions.json';
import { getRandomValue } from './Utils.js';



class TraitList extends React.Component {

	static defaultProps = {
		title: "TBD Title",
		fields: [{text: 'text', hasLocation: false}]
	  };

    render() {

		return (
			<div class="mon-stat-block__attribute">
				<span class="mon-stat-block__attribute-label">{this.props.title}: </span>
				<span class="mon-stat-block__attribute-data">
					<span class="mon-stat-block__attribute-data-value">
						<dl>
							{this.props.fields.map((value, index) => {
								let location = '';
								if (value.hasLocation === true) {
									let bodyLocation = getRandomValue(traitsOptions.bodyLocations);
									location = ` (location: ${bodyLocation})`;
								}
								return <dd contentEditable key={index}>&nbsp;-&nbsp;{value.text}
									<small>{location}</small></dd>
							})}
						</dl>
					</span>
				</span>
			</div>
		);




    }
};
TraitList.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.object)
};

export default TraitList;