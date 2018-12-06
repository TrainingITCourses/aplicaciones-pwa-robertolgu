import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

import { HttpClientModule } from '@angular/common/http';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { ShellContainerComponent } from './shell-container/shell-container.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './store/launch/launch.effects';
import { StatusEffects } from './store/status/status.effects';
import { MissionTypeEffects } from './store/MissionType/mission-type.effects';
import { AgencyEffects } from './store/Agency/agency.effects';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    LaunchListComponent,
    ShellContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    EffectsModule.forRoot([LaunchEffects, StatusEffects, MissionTypeEffects, AgencyEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
