import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../api.service';
import { MissionTypesLoaded, MissionTypeActionTypes } from './mission-type.actions';
import { map, mergeMap } from 'rxjs/operators';


@Injectable()
export class MissionTypeEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(MissionTypeActionTypes.LoadMissionTypes)
    .pipe(
      mergeMap(() =>
        this.api
          .getMissionTypes$()
          .pipe(map(missionTypes => new MissionTypesLoaded(missionTypes)))
      )
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
