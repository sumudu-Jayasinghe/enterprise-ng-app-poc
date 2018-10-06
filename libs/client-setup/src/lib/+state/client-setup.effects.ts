import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ClientSetupState } from './client-setup.reducer';
import {
  LoadClientSetup,
  ClientSetupLoaded,
  ClientSetupLoadError,
  ClientSetupActionTypes
} from './client-setup.actions';

@Injectable()
export class ClientSetupEffects {
  @Effect()
  loadClientSetup$ = this.dataPersistence.fetch(
    ClientSetupActionTypes.LoadClientSetup,
    {
      run: (action: LoadClientSetup, state: ClientSetupState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ClientSetupLoaded([]);
      },

      onError: (action: LoadClientSetup, error) => {
        console.error('Error', error);
        return new ClientSetupLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ClientSetupState>
  ) {}
}
