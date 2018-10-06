import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CoporateStateState } from './coporate-state.reducer';
import {
  LoadCoporateState,
  CoporateStateLoaded,
  CoporateStateLoadError,
  CoporateStateActionTypes
} from './coporate-state.actions';

@Injectable()
export class CoporateStateEffects {
  @Effect()
  loadCoporateState$ = this.dataPersistence.fetch(
    CoporateStateActionTypes.LoadCoporateState,
    {
      run: (action: LoadCoporateState, state: CoporateStateState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new CoporateStateLoaded([]);
      },

      onError: (action: LoadCoporateState, error) => {
        console.error('Error', error);
        return new CoporateStateLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CoporateStateState>
  ) {}
}
