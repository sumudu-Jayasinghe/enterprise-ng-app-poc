import {
  ClientSearchAction,
  ClientSearchActionTypes
} from './client-search.actions';

/**
 * Interface for the 'ClientSearch' data used in
 *  - ClientSearchState, and
 *  - clientSearchReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ClientSearchState {
  list: Entity[]; // list of ClientSearch; analogous to a sql normalized table
  selectedId?: string | number; // which ClientSearch record has been selected
  loaded: boolean; // has the ClientSearch list been loaded
  error?: any; // last none error (if any)
}

export const initialState: ClientSearchState = {
  list: [],
  loaded: false
};

export function clientSearchReducer(
  state: ClientSearchState = initialState,
  action: ClientSearchAction
): ClientSearchState {
  switch (action.type) {
    case ClientSearchActionTypes.ClientSearchLoaded: {
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
