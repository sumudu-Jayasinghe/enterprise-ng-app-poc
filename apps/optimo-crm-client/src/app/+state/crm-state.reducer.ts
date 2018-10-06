import { CrmStateAction, CrmStateActionTypes } from './crm-state.actions';

/**
 * Interface for the 'CrmState' data used in
 *  - CrmStateState, and
 *  - crmStateReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CrmStateState {
  list: Entity[]; // list of CrmState; analogous to a sql normalized table
  selectedId?: string | number; // which CrmState record has been selected
  loaded: boolean; // has the CrmState list been loaded
  error?: any; // last none error (if any)
}

export const initialState: CrmStateState = {
  list: [],
  loaded: false
};

export function crmStateReducer(
  state: CrmStateState = initialState,
  action: CrmStateAction
): CrmStateState {
  switch (action.type) {
    case CrmStateActionTypes.CrmStateLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
