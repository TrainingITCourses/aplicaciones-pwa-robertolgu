import { MissionTypeActions, MissionTypeActionTypes } from './mission-type.actions';


export interface MissionTypeState {
  missionTypes: any[];
  loading: boolean;
}

export const initialState: MissionTypeState = {
  missionTypes: [],
  loading: false
};

export function reducer(state = initialState, action: MissionTypeActions): MissionTypeState {
  switch (action.type) {
    case MissionTypeActionTypes.LoadMissionTypes:
      return { ...state, loading: true };
    case MissionTypeActionTypes.MissionTypesLoaded:
      return {loading: false, missionTypes: action.payload};
    default:
      return state;
  }
}
