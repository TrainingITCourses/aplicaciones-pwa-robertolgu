import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromMissionType from './MissionType/mission-type.reducer';
import * as fromAgency from './Agency/agency.reducer';

export interface State {
  launch: fromLaunch.LaunchesState;
  status: fromStatus.SatatusState;
  missionType: fromMissionType.MissionTypeState;
  agency: fromAgency.AgencyState;
}

export const reducers: ActionReducerMap<State> = {
  launch: fromLaunch.reducer,
  status: fromStatus.reducer,
  missionType: fromMissionType.reducer,
  agency: fromAgency.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
