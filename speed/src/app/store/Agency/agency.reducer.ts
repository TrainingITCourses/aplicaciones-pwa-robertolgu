import { AgencyActions, AgencyActionTypes } from './agency.actions';


export interface AgencyState {
  agencies: any[];
  loading: boolean;
}

export const initialState: AgencyState = {
  agencies: [],
  loading: false
};

export function reducer(state = initialState, action: AgencyActions): AgencyState {
  switch (action.type) {
    case AgencyActionTypes.LoadAgencys:
      return {...state, loading: true};
    case AgencyActionTypes.AgencysLoaded:
      return {loading: false, agencies: action.payload};
    default:
      return state;
  }
}
