import { Component, ChangeDetectionStrategy} from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'speed';
  public developerVersion = '2';

  constructor(private swUpadate: SwUpdate) {
    if (swUpadate.isEnabled) {
      swUpadate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = 'Existe una nueva versión. Descargar?';

          if (confirm(msg)) {
            window.location.reload();
          }
        }
      );
    }
  }
}
