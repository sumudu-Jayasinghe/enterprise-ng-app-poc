import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientSearchState } from './client-search.reducer';

// Lookup the 'ClientSearch' feature state managed by NgRx
const getClientSearchState = createFeatureSelector<ClientSearchState>(
  'clientSearch'
);

const getLoaded = createSelector(
  getClientSearchState,
  (state: ClientSearchState) => state.loaded
);
const getError = createSelector(
  getClientSearchState,
  (state: ClientSearchState) => state.error
);

const getAllClientSearch = createSelector(
  getClientSearchState,
  getLoaded,
  (state: ClientSearchState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getClientSearchState,
  (state: ClientSearchState) => state.selectedId
);
const getSelectedClientSearch = createSelector(
  getAllClientSearch,
  getSelectedId,
  (clientSearch, id) => {
    const result = clientSearch.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const clientSearchQuery = {
  getLoaded,
  getError,
  getAllClientSearch,
  getSelectedClientSearch
};
