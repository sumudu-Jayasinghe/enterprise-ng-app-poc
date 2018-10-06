import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ClientSetupEffects } from './client-setup.effects';
import { LoadClientSetup, ClientSetupLoaded } from './client-setup.actions';

describe('ClientSetupEffects', () => {
  let actions: Observable<any>;
  let effects: ClientSetupEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ClientSetupEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ClientSetupEffects);
  });

  describe('loadClientSetup$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadClientSetup() });
      expect(effects.loadClientSetup$).toBeObservable(
        hot('-a-|', { a: new ClientSetupLoaded([]) })
      );
    });
  });
});
