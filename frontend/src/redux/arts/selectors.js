import { createSelector } from 'reselect';
import config from '../../config';

const UPDATE_INTERVAL = config.IS_DEV ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const arts = state => state.technologies.data;
export const artsMeta = state => ({
	loading: state.technologies.loading,
	error: state.technologies.error,
	lastUpdate: state.technologies.lastUpdate
})

export const artsShouldUpdate = createSelector(
	artsMeta,
	meta => {
		return Date.now() - meta.lastUpdate > UPDATE_INTERVAL
	}
)