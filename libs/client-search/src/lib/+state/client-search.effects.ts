import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ClientSearchState } from './client-search.reducer';
import {
  LoadClientSearch,
  ClientSearchLoaded,
  ClientSearchLoadError,
  ClientSearchActionTypes
} from './client-search.actions';

@Injectable()
export class ClientSearchEffects {
  @Effect()
  loadClientSearch$ = this.dataPersistence.fetch(
    ClientSearchActionTypes.LoadClientSearch,
    {
      run: (action: LoadClientSearch, state: ClientSearchState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ClientSearchLoaded([]);
      },

      onError: (action: LoadClientSearch, error) => {
        console.error('Error', error);
        return new ClientSearchLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ClientSearchState>
  ) {}
}
