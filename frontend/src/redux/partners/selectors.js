import { createSelector } from 'reselect';
import config from '../../config';

const UPDATE_INTERVAL = config.IS_DEV ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const partners = state => state.partners.data;
export const partnersMeta = state => ({
	isLoading: state.partners.isLoading,
	Error: state.partners.Error,
	lastUpdate: state.partners.lastUpdate
})

export const partnersShouldUpdate = createSelector(
	partnersMeta,
	meta => {
		return Date.now() - meta.lastUpdate > UPDATE_INTERVAL
	}
)