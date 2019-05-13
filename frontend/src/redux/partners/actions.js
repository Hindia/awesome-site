import * as ActionTypes from './actionTypes';

import { partnersShouldUpdate } from './selectors';
import PartnerService from '../../services/partners';
import logger from '../../utils/logger';

export const updatePartners = () => (dispatch, getState) => {
    if (!partnersShouldUpdate(getState())) {
		logger('partners found in cache, skipping update');
		return;
	}
	else{
	return PartnerService.getAll().then(partners => {
      dispatch({ type: UPDATE_PARTNERS_SUCCESS, payload: partners });
    }}
  }
