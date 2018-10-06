import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CrmStateState } from './crm-state.reducer';

// Lookup the 'CrmState' feature state managed by NgRx
const getCrmStateState = createFeatureSelector<CrmStateState>('crmState');

const getLoaded = createSelector(
  getCrmStateState,
  (state: CrmStateState) => state.loaded
);
const getError = createSelector(
  getCrmStateState,
  (state: CrmStateState) => state.error
);

const getAllCrmState = createSelector(
  getCrmStateState,
  getLoaded,
  (state: CrmStateState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCrmStateState,
  (state: CrmStateState) => state.selectedId
);
const getSelectedCrmState = createSelector(
  getAllCrmState,
  getSelectedId,
  (crmState, id) => {
    const result = crmState.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const crmStateQuery = {
  getLoaded,
  getError,
  getAllCrmState,
  getSelectedCrmState
};
