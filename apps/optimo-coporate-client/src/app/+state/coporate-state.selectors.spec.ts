import { Entity, CoporateStateState } from './coporate-state.reducer';
import { coporateStateQuery } from './coporate-state.selectors';

describe('CoporateState Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCoporateStateId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCoporateState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      coporateState: {
        list: [
          createCoporateState('PRODUCT-AAA'),
          createCoporateState('PRODUCT-BBB'),
          createCoporateState('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('CoporateState Selectors', () => {
    it('getAllCoporateState() should return the list of CoporateState', () => {
      const results = coporateStateQuery.getAllCoporateState(storeState);
      const selId = getCoporateStateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCoporateState() should return the selected Entity', () => {
      const result = coporateStateQuery.getSelectedCoporateState(storeState);
      const selId = getCoporateStateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = coporateStateQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = coporateStateQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
