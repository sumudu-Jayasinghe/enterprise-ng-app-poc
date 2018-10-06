import { Action } from '@ngrx/store';
import { Entity } from './client-setup.reducer';

export enum ClientSetupActionTypes {
  LoadClientSetup = '[ClientSetup] Load ClientSetup',
  ClientSetupLoaded = '[ClientSetup] ClientSetup Loaded',
  ClientSetupLoadError = '[ClientSetup] ClientSetup Load Error'
}

export class LoadClientSetup implements Action {
  readonly type = ClientSetupActionTypes.LoadClientSetup;
}

export class ClientSetupLoadError implements Action {
  readonly type = ClientSetupActionTypes.ClientSetupLoadError;
  constructor(public payload: any) {}
}

export class ClientSetupLoaded implements Action {
  readonly type = ClientSetupActionTypes.ClientSetupLoaded;
  constructor(public payload: Entity[]) {}
}

export type ClientSetupAction =
  | LoadClientSetup
  | ClientSetupLoaded
  | ClientSetupLoadError;

export const fromClientSetupActions = {
  LoadClientSetup,
  ClientSetupLoaded,
  ClientSetupLoadError
};
