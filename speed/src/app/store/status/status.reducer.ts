import { StatusActions, StatusActionTypes } from './status.actions';

export interface SatatusState {
  statuses: any[];
}

export const initialState: SatatusState = {
  statuses: []
};

export function reducer(
  state = initialState,
  action: StatusActions
): SatatusState {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
      return state;
    case StatusActionTypes.StatusesLoaded:
      return { statuses: action.payload };
    default:
      return state;
  }
}
