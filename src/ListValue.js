import React from 'react';
import PropTypes from 'prop-types';

class ListValue extends React.Component {

	static defaultProps = {
		title: 'TBD title',
		fields: [['title', 'text']]
	  };

    render() {
		return (
			<div class="mon-stat-block__attribute">
				<span class="mon-stat-block__attribute-label">{this.props.title}: </span>
				<span class="mon-stat-block__attribute-data">
					<span class="mon-stat-block__attribute-data-value">
						<dl>
							<dl>
								{this.props.fields.map((value, index) => {
									return <dd contentEditable key={index}><strong>&nbsp;-&nbsp;{value[0]}</strong>: {value[1]}</dd>
								})}
							</dl>
						</dl>
					</span>
				</span>
			</div>
		);
    }
};

ListValue.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default ListValue;