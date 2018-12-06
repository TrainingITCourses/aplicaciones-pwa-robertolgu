import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, LaunchesLoaded } from './launch.actions';
import { mergeMap, map } from 'rxjs/operators';
import { ApiService } from '../api.service';


@Injectable()
export class LaunchEffects {

  constructor(private actions$: Actions, private api: ApiService) {}

  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunches)
    .pipe(
      mergeMap(() =>
        this.api
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

}


