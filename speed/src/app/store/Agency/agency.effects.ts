import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../api.service';
import { map, mergeMap } from 'rxjs/operators';
import { AgencyActionTypes, AgencysLoaded } from './agency.actions';


@Injectable()
export class AgencyEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(AgencyActionTypes.LoadAgencys)
    .pipe(
      mergeMap(() =>
        this.api
          .getAgencies$()
          .pipe(map(agencies => new AgencysLoaded(agencies)))
      )
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
