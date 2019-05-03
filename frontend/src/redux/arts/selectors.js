import { createSelector } from 'reselect';
import config from '../../config';

const UPDATE_INTERVAL = config.IS_DEV ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const arts = state => state.arts.data;
export const artsMeta = state => ({
	loading: state.arts.loading,
	error: state.arts.error,
	lastUpdate: state.arts.lastUpdate
})

export const artsShouldUpdate = createSelector(
	artsMeta,
	meta => {
		return Date.now() - meta.lastUpdate > UPDATE_INTERVAL
	}
)