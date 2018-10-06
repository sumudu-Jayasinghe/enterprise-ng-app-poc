import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CrmStateState } from './crm-state.reducer';
import {
  LoadCrmState,
  CrmStateLoaded,
  CrmStateLoadError,
  CrmStateActionTypes
} from './crm-state.actions';

@Injectable()
export class CrmStateEffects {
  @Effect()
  loadCrmState$ = this.dataPersistence.fetch(CrmStateActionTypes.LoadCrmState, {
    run: (action: LoadCrmState, state: CrmStateState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new CrmStateLoaded([]);
    },

    onError: (action: LoadCrmState, error) => {
      console.error('Error', error);
      return new CrmStateLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CrmStateState>
  ) {}
}
