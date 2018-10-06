import {
  ClientSetupAction,
  ClientSetupActionTypes
} from './client-setup.actions';

/**
 * Interface for the 'ClientSetup' data used in
 *  - ClientSetupState, and
 *  - clientSetupReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ClientSetupState {
  list: Entity[]; // list of ClientSetup; analogous to a sql normalized table
  selectedId?: string | number; // which ClientSetup record has been selected
  loaded: boolean; // has the ClientSetup list been loaded
  error?: any; // last none error (if any)
}

export const initialState: ClientSetupState = {
  list: [],
  loaded: false
};

export function clientSetupReducer(
  state: ClientSetupState = initialState,
  action: ClientSetupAction
): ClientSetupState {
  switch (action.type) {
    case ClientSetupActionTypes.ClientSetupLoaded: {
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
