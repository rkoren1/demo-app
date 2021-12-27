import { createAction, props } from '@ngrx/store';
import {OblikaPodatkov, store } from './store.state';

export enum storeTypes {
  getData = '[store] get data with http get request',
  getDataSuccess = '[store] get data success',
  getDataFailure = '[store] get data failure',
  setSelectedData = '[store] setSelectedData',
}

export const getData = createAction(storeTypes.getData);

export const getDataSuccess = createAction(
  storeTypes.getDataSuccess,
  props<{ data: store }>()
);

export const getDataFailure = createAction(
  storeTypes.getDataFailure,
  props<{ error: any }>()
);

export const setSelectedData = createAction(
  storeTypes.setSelectedData,
  props<{ selectedData: OblikaPodatkov[] }>()
);

