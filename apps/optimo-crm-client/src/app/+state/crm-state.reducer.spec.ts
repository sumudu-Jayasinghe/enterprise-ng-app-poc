import { CrmStateLoaded } from './crm-state.actions';
import {
  CrmStateState,
  Entity,
  initialState,
  crmStateReducer
} from './crm-state.reducer';

describe('CrmState Reducer', () => {
  const getCrmStateId = it => it['id'];
  let createCrmState;

  beforeEach(() => {
    createCrmState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid CrmState actions ', () => {
    it('should return set the list of known CrmState', () => {
      const crmStates = [
        createCrmState('PRODUCT-AAA'),
        createCrmState('PRODUCT-zzz')
      ];
      const action = new CrmStateLoaded(crmStates);
      const result: CrmStateState = crmStateReducer(initialState, action);
      const selId: string = getCrmStateId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = crmStateReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
