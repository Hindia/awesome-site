import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

import { map } from 'lodash-es';
import { connect } from 'react-redux';

import { arts as selectArts } from '../../redux/arts/selectors';
import { updateArts } from '../../redux/arts/actions';

class TestComponent extends PureComponent {
	static propTypes = {
		arts: PropTypes.array.isRequired,
		updateArts: PropTypes.func.isRequired,
	}

	static defaultProps = {
		arts: [],
	}

	componentDidMount() {
		this.props.updateArts();
	}

	renderArts() {
		const { arts } = this.props;
		return map(arts, art => {
			return (
				<div className="TestComponent--item" key={art.name}>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="TestComponent">

			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	arts: selectArts(state),
})

const mapDispatchToProps = (dispatch) => ({
	updateArts: () => dispatch(updateArts())
})

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);