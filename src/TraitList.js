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
			<div className="simpleValue">
				<div className="row">
					<div className="col-xs-4 col-md-2 text-right">
						<strong>{this.props.title}:&nbsp;</strong>
					</div>
					<div className="col-xs-8 col-md-10">
                        <dl>
						{this.props.fields.map((value, index) => {
							let location = '';
							if (value.hasLocation === true) {
								let bodyLocation = getRandomValue(traitsOptions.bodyLocations);
								location = ` (location: ${bodyLocation})`;
							}
							return <dd contentEditable key={index}>{value.text}
							  <small>{location}</small></dd>
      					})}
                        </dl>
					</div>
				</div>
			</div>
		);




    }
};
TraitList.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.object)
};

export default TraitList;