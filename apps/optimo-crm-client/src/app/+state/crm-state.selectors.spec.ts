import { Entity, CrmStateState } from './crm-state.reducer';
import { crmStateQuery } from './crm-state.selectors';

describe('CrmState Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCrmStateId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCrmState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      crmState: {
        list: [
          createCrmState('PRODUCT-AAA'),
          createCrmState('PRODUCT-BBB'),
          createCrmState('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('CrmState Selectors', () => {
    it('getAllCrmState() should return the list of CrmState', () => {
      const results = crmStateQuery.getAllCrmState(storeState);
      const selId = getCrmStateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCrmState() should return the selected Entity', () => {
      const result = crmStateQuery.getSelectedCrmState(storeState);
      const selId = getCrmStateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = crmStateQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = crmStateQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
