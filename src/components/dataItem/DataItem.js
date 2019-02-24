import React from 'react';
import PropTypes from 'prop-types';

import './DataItem.scss';

const DataItem = ({name, distance}) => (
	<tr className="data-item">
		<th className="data-item__name">{name}</th>
		<th className="data-item__distance">{distance}</th>
	</tr>
);

DataItem.propTypes = {
	name: PropTypes.string,
	distance: PropTypes.number
};

export default DataItem;