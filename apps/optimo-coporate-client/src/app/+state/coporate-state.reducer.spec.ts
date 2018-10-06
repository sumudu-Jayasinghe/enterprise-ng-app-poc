import { CoporateStateLoaded } from './coporate-state.actions';
import {
  CoporateStateState,
  Entity,
  initialState,
  coporateStateReducer
} from './coporate-state.reducer';

describe('CoporateState Reducer', () => {
  const getCoporateStateId = it => it['id'];
  let createCoporateState;

  beforeEach(() => {
    createCoporateState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid CoporateState actions ', () => {
    it('should return set the list of known CoporateState', () => {
      const coporateStates = [
        createCoporateState('PRODUCT-AAA'),
        createCoporateState('PRODUCT-zzz')
      ];
      const action = new CoporateStateLoaded(coporateStates);
      const result: CoporateStateState = coporateStateReducer(
        initialState,
        action
      );
      const selId: string = getCoporateStateId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = coporateStateReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
