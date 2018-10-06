import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CoporateStateEffects } from './coporate-state.effects';
import {
  LoadCoporateState,
  CoporateStateLoaded
} from './coporate-state.actions';

describe('CoporateStateEffects', () => {
  let actions: Observable<any>;
  let effects: CoporateStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CoporateStateEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CoporateStateEffects);
  });

  describe('loadCoporateState$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCoporateState() });
      expect(effects.loadCoporateState$).toBeObservable(
        hot('-a-|', { a: new CoporateStateLoaded([]) })
      );
    });
  });
});
