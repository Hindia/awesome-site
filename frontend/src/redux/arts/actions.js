import * as ActionTypes from './actionTypes';
import { artsShouldUpdate } from './selectors';
import logger from '../../utils/logger';

export const updateArts = () => (dispatch, getState) => {
	if (!artsShouldUpdate(getState())) {
		logger('Arts found in cache, skipping update');
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_ARTS,
		meta: {
			onFailure: (e) => logger('Error updating arts', e)
		}
	})
}
