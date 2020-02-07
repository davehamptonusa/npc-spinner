import React from 'react';
import PropTypes from 'prop-types';

class ListValue extends React.Component {

	static defaultProps = {
		title: 'TBD title',
		fields: [['title', 'text']]
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
							return <dd contentEditable key={index}><strong>&nbsp;-&nbsp;{value[0]}</strong>: {value[1]}</dd>
      					})}
                        </dl>
					</div>
				</div>
			</div>
		);
    }
};

ListValue.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default ListValue;