import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = 'launches';
  private url = 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000';
  constructor(private http: HttpClient) {}

  public getLaunches$ = (): Observable<any[]> =>
    this.http.get(this.url).pipe(map((res: any) => res.launches));

  public getAgencies$ = () =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(
        map((res: any) => res.agencies)
      )

  public getMissionTypes$ = () =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))

  public getStatusTypes$ = () =>
    this.http.get(environment.url + '/assets/data/launchstatus.json').pipe(
      map((res: any) => res.types),
      map((statuses: any[]) => statuses.map(this.setStatusColor))
    )

  private setStatusColor = statusType => {
    switch (statusType.id) {
      case 1:
      case 3:
        statusType.color = 'accent';
        break;
      case 2:
      case 6:
        statusType.color = 'primary';
        break;
      case 4:
      case 5:
      case 7:
        statusType.class = 'warn';
        break;
      default:
        break;
    }
    return statusType;
  }
}
