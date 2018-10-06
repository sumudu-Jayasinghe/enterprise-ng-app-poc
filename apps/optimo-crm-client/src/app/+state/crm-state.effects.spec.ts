import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CrmStateEffects } from './crm-state.effects';
import { LoadCrmState, CrmStateLoaded } from './crm-state.actions';

describe('CrmStateEffects', () => {
  let actions: Observable<any>;
  let effects: CrmStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CrmStateEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CrmStateEffects);
  });

  describe('loadCrmState$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCrmState() });
      expect(effects.loadCrmState$).toBeObservable(
        hot('-a-|', { a: new CrmStateLoaded([]) })
      );
    });
  });
});
