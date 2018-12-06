import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { LoadLaunches } from '../store/launch/launch.actions';
import { LoadStatuses } from '../store/status/status.actions';
import { LoadMissionTypes } from '../store/MissionType/mission-type.actions';
import { LoadAgencys } from '../store/Agency/agency.actions';


@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrls: ['./shell-container.component.css']
})
export class ShellContainerComponent implements OnInit {

  constructor(
    private api: ApiService,
    private store: Store<State>
  ) { }

  public ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadMissionTypes());
    this.store.dispatch(new LoadAgencys());
  }
}
