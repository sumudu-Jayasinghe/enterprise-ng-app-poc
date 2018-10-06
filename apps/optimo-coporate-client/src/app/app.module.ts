import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as coporateStateInitialState,
  coporateStateReducer
} from './+state/coporate-state.reducer';
import { CoporateStateEffects } from './+state/coporate-state.effects';
import { environment } from '../../../optimo-crm-client/src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedComponentsModule } from '../../../../libs/shared/shared-components/src/lib/shared-components.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    SharedComponentsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path: 'search',
        loadChildren: '@enterprise-ng-app-poc/client-search#ClientSearchModule'
      },
      {
        path: 'client-setup',
        loadChildren: '@enterprise-ng-app-poc/client-setup#ClientSetupModule'
      }
    ]),
    StoreModule.forRoot(
      { coporateState: coporateStateReducer },
      {
        initialState: { coporateState: coporateStateInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([CoporateStateEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
