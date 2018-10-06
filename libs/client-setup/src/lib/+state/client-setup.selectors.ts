import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientSetupState } from './client-setup.reducer';

// Lookup the 'ClientSetup' feature state managed by NgRx
const getClientSetupState = createFeatureSelector<ClientSetupState>(
  'clientSetup'
);

const getLoaded = createSelector(
  getClientSetupState,
  (state: ClientSetupState) => state.loaded
);
const getError = createSelector(
  getClientSetupState,
  (state: ClientSetupState) => state.error
);

const getAllClientSetup = createSelector(
  getClientSetupState,
  getLoaded,
  (state: ClientSetupState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getClientSetupState,
  (state: ClientSetupState) => state.selectedId
);
const getSelectedClientSetup = createSelector(
  getAllClientSetup,
  getSelectedId,
  (clientSetup, id) => {
    const result = clientSetup.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const clientSetupQuery = {
  getLoaded,
  getError,
  getAllClientSetup,
  getSelectedClientSetup
};
