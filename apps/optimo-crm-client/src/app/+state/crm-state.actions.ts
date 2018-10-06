import { Action } from '@ngrx/store';
import { Entity } from './crm-state.reducer';

export enum CrmStateActionTypes {
  LoadCrmState = '[CrmState] Load CrmState',
  CrmStateLoaded = '[CrmState] CrmState Loaded',
  CrmStateLoadError = '[CrmState] CrmState Load Error'
}

export class LoadCrmState implements Action {
  readonly type = CrmStateActionTypes.LoadCrmState;
}

export class CrmStateLoadError implements Action {
  readonly type = CrmStateActionTypes.CrmStateLoadError;
  constructor(public payload: any) {}
}

export class CrmStateLoaded implements Action {
  readonly type = CrmStateActionTypes.CrmStateLoaded;
  constructor(public payload: Entity[]) {}
}

export type CrmStateAction = LoadCrmState | CrmStateLoaded | CrmStateLoadError;

export const fromCrmStateActions = {
  LoadCrmState,
  CrmStateLoaded,
  CrmStateLoadError
};
