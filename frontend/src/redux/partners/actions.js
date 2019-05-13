import * as ActionTypes from './actionTypes';

import PartnerService from '../../services/partners';

export function updatePartners() {
  return dispatch => {
    dispatch({ type: ActionTypes.UPDATE_PARTNERS_STARTED });
    dispatch({ type: ActionTypes.UPDATE_PARTNERS_SUCCESS, payload: PartnerService.getAll()  });
    dispatch({ type: ActionTypes.UPDATE_PARTNERS_FAILED, error: true });
    }
  };
