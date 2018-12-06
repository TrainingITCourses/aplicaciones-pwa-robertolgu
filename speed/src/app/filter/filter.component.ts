import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() public criterio: string;
  public statuses: any[];
  public agencies: any[];
  public missionTypes: any[];
  public filterSelection: string;
  public filteredLaunches: any[] = [];
  public allLaunches: any[];


  constructor(private store: Store<State> ) {}


  ngOnInit() {
    this.store
      .select('launch')
      .subscribe(launchesState => (this.allLaunches = launchesState.launches));

    this.store
      .select('status')
      .subscribe(statusesState => (this.statuses = statusesState.statuses));

    this.store
      .select('missionType')
      .subscribe(missionTypesState => (this.missionTypes = missionTypesState.missionTypes));

     this.store
       .select('agency')
       .subscribe(agencyState => (this.agencies = agencyState.agencies));

  }

  selectChange() {
    let filteredLaunches;
    if (this.allLaunches !== undefined) {
      if (this.criterio === 'Estado') {
        filteredLaunches = this.allLaunches.filter(l =>
          l.status == this.filterSelection
        );
      } else if (this.criterio === 'Agencias') {
        filteredLaunches = this.allLaunches.filter(l =>
          l.rocket !== undefined &&
          l.rocket.agencies !== null &&
          l.rocket.agencies[0] !== undefined &&
          l.rocket.agencies[0].id == this.filterSelection
        );
      } else if (this.criterio === 'Tipo') {
        filteredLaunches = this.allLaunches.filter(l =>
          l.missions !== undefined &&
          l.missions[0] !== undefined &&
          l.missions[0].type == this.filterSelection
        );
      }
  }
    this.filteredLaunches = filteredLaunches;
  }

}
