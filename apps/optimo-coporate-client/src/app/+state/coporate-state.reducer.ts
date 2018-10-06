import {
  CoporateStateAction,
  CoporateStateActionTypes
} from './coporate-state.actions';

/**
 * Interface for the 'CoporateState' data used in
 *  - CoporateStateState, and
 *  - coporateStateReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CoporateStateState {
  list: Entity[]; // list of CoporateState; analogous to a sql normalized table
  selectedId?: string | number; // which CoporateState record has been selected
  loaded: boolean; // has the CoporateState list been loaded
  error?: any; // last none error (if any)
}

export const initialState: CoporateStateState = {
  list: [],
  loaded: false
};

export function coporateStateReducer(
  state: CoporateStateState = initialState,
  action: CoporateStateAction
): CoporateStateState {
  switch (action.type) {
    case CoporateStateActionTypes.CoporateStateLoaded: {
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
