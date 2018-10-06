import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoporateStateState } from './coporate-state.reducer';

// Lookup the 'CoporateState' feature state managed by NgRx
const getCoporateStateState = createFeatureSelector<CoporateStateState>(
  'coporateState'
);

const getLoaded = createSelector(
  getCoporateStateState,
  (state: CoporateStateState) => state.loaded
);
const getError = createSelector(
  getCoporateStateState,
  (state: CoporateStateState) => state.error
);

const getAllCoporateState = createSelector(
  getCoporateStateState,
  getLoaded,
  (state: CoporateStateState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCoporateStateState,
  (state: CoporateStateState) => state.selectedId
);
const getSelectedCoporateState = createSelector(
  getAllCoporateState,
  getSelectedId,
  (coporateState, id) => {
    const result = coporateState.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const coporateStateQuery = {
  getLoaded,
  getError,
  getAllCoporateState,
  getSelectedCoporateState
};
