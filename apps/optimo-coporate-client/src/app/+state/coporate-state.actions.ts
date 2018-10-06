import { Action } from '@ngrx/store';
import { Entity } from './coporate-state.reducer';

export enum CoporateStateActionTypes {
  LoadCoporateState = '[CoporateState] Load CoporateState',
  CoporateStateLoaded = '[CoporateState] CoporateState Loaded',
  CoporateStateLoadError = '[CoporateState] CoporateState Load Error'
}

export class LoadCoporateState implements Action {
  readonly type = CoporateStateActionTypes.LoadCoporateState;
}

export class CoporateStateLoadError implements Action {
  readonly type = CoporateStateActionTypes.CoporateStateLoadError;
  constructor(public payload: any) {}
}

export class CoporateStateLoaded implements Action {
  readonly type = CoporateStateActionTypes.CoporateStateLoaded;
  constructor(public payload: Entity[]) {}
}

export type CoporateStateAction =
  | LoadCoporateState
  | CoporateStateLoaded
  | CoporateStateLoadError;

export const fromCoporateStateActions = {
  LoadCoporateState,
  CoporateStateLoaded,
  CoporateStateLoadError
};
