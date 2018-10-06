import { ClientSetupLoaded } from './client-setup.actions';
import {
  ClientSetupState,
  Entity,
  initialState,
  clientSetupReducer
} from './client-setup.reducer';

describe('ClientSetup Reducer', () => {
  const getClientSetupId = it => it['id'];
  let createClientSetup;

  beforeEach(() => {
    createClientSetup = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ClientSetup actions ', () => {
    it('should return set the list of known ClientSetup', () => {
      const clientSetups = [
        createClientSetup('PRODUCT-AAA'),
        createClientSetup('PRODUCT-zzz')
      ];
      const action = new ClientSetupLoaded(clientSetups);
      const result: ClientSetupState = clientSetupReducer(initialState, action);
      const selId: string = getClientSetupId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = clientSetupReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
