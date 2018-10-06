import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ClientSearchEffects } from './client-search.effects';
import { LoadClientSearch, ClientSearchLoaded } from './client-search.actions';

describe('ClientSearchEffects', () => {
  let actions: Observable<any>;
  let effects: ClientSearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ClientSearchEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ClientSearchEffects);
  });

  describe('loadClientSearch$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadClientSearch() });
      expect(effects.loadClientSearch$).toBeObservable(
        hot('-a-|', { a: new ClientSearchLoaded([]) })
      );
    });
  });
});
