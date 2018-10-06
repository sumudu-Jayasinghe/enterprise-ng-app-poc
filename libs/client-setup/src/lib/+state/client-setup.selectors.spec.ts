import { Entity, ClientSetupState } from './client-setup.reducer';
import { clientSetupQuery } from './client-setup.selectors';

describe('ClientSetup Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getClientSetupId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createClientSetup = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      clientSetup: {
        list: [
          createClientSetup('PRODUCT-AAA'),
          createClientSetup('PRODUCT-BBB'),
          createClientSetup('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('ClientSetup Selectors', () => {
    it('getAllClientSetup() should return the list of ClientSetup', () => {
      const results = clientSetupQuery.getAllClientSetup(storeState);
      const selId = getClientSetupId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedClientSetup() should return the selected Entity', () => {
      const result = clientSetupQuery.getSelectedClientSetup(storeState);
      const selId = getClientSetupId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = clientSetupQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = clientSetupQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
