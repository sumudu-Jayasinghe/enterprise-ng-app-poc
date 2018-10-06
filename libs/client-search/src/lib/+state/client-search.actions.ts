import { Action } from '@ngrx/store';
import { Entity } from './client-search.reducer';

export enum ClientSearchActionTypes {
  LoadClientSearch = '[ClientSearch] Load ClientSearch',
  ClientSearchLoaded = '[ClientSearch] ClientSearch Loaded',
  ClientSearchLoadError = '[ClientSearch] ClientSearch Load Error'
}

export class LoadClientSearch implements Action {
  readonly type = ClientSearchActionTypes.LoadClientSearch;
}

export class ClientSearchLoadError implements Action {
  readonly type = ClientSearchActionTypes.ClientSearchLoadError;
  constructor(public payload: any) {}
}

export class ClientSearchLoaded implements Action {
  readonly type = ClientSearchActionTypes.ClientSearchLoaded;
  constructor(public payload: Entity[]) {}
}

export type ClientSearchAction =
  | LoadClientSearch
  | ClientSearchLoaded
  | ClientSearchLoadError;

export const fromClientSearchActions = {
  LoadClientSearch,
  ClientSearchLoaded,
  ClientSearchLoadError
};
