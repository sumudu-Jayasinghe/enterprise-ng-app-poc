import { ClientSearchLoaded } from './client-search.actions';
import {
  ClientSearchState,
  Entity,
  initialState,
  clientSearchReducer
} from './client-search.reducer';

describe('ClientSearch Reducer', () => {
  const getClientSearchId = it => it['id'];
  let createClientSearch;

  beforeEach(() => {
    createClientSearch = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ClientSearch actions ', () => {
    it('should return set the list of known ClientSearch', () => {
      const clientSearchs = [
        createClientSearch('PRODUCT-AAA'),
        createClientSearch('PRODUCT-zzz')
      ];
      const action = new ClientSearchLoaded(clientSearchs);
      const result: ClientSearchState = clientSearchReducer(
        initialState,
        action
      );
      const selId: string = getClientSearchId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = clientSearchReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
