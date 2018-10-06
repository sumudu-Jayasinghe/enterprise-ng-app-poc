import { Entity, ClientSearchState } from './client-search.reducer';
import { clientSearchQuery } from './client-search.selectors';

describe('ClientSearch Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getClientSearchId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createClientSearch = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      clientSearch: {
        list: [
          createClientSearch('PRODUCT-AAA'),
          createClientSearch('PRODUCT-BBB'),
          createClientSearch('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('ClientSearch Selectors', () => {
    it('getAllClientSearch() should return the list of ClientSearch', () => {
      const results = clientSearchQuery.getAllClientSearch(storeState);
      const selId = getClientSearchId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedClientSearch() should return the selected Entity', () => {
      const result = clientSearchQuery.getSelectedClientSearch(storeState);
      const selId = getClientSearchId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = clientSearchQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = clientSearchQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
