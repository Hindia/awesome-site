import * as ActionTypes from './actionTypes';

import PartnerService from '../../services/partners';

export function updatePartners() {
  return dispatch => {
    dispatch({ type: ActionTypes.UPDATE_PARTNERS_STARTED });
    return PartnerService.getAll().then(partner => {
      dispatch({ type: ActionTypes.UPDATE_PARTNERS_SUCCESS, payload: PartnerService.getAll()  });
    }).catch(error => {
      dispatch({ type: ActionTypes.UPDATE_PARTNERS_FAILED, error: true });
    });
  };
}