import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

import { connect } from 'react-redux';
import { map } from 'lodash-es';

import { partners as selectPartners } from '../../redux/partners/selectors';
import { updatePartners } from '../../redux/partners/actions';

class PartnerGrid extends PureComponent {
	static propTypes = {
		partners: PropTypes.array.isRequired,
		updatePartners: PropTypes.func.isRequired,
	}

	static defaultProps = {
		partners: [],
	}

	componentDidMount() {
		this.props.updatePartners();
	}

	renderPartners() {
		const { partners } = this.props;
		return map(partners, partner => {
			return (
				<div className="PartnerGrid--item" key={partner.name}>
					<img className="PartnerGrid--item__logo" src={partner.logo.url} alt={partner.name} />
					<a href='{partner.link}'>partner website</a>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="PartnerGrid">
				<h3 className="PartnerGrid--title">Our Partners are</h3>
				<div className="PartnerGrid--items">
					{this.renderPartners()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	partners: state.partners.data,
})

const mapDispatchToProps = (dispatch) => ({
	updatePartners: () => dispatch(updatePartners())
})

export default connect(mapStateToProps, mapDispatchToProps)(PartnerGrid);