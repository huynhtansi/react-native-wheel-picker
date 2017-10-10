'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
export default class WheelCurvedPickerItem extends React.Component {

	static propTypes = {
		value: PropTypes.any, // string or integer basically
		label: PropTypes.string,
	}

	render() {
		// These items don't get rendered directly.
		return null;
	}
}
