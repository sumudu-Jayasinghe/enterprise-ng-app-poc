import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as clientSetupInitialState,
  clientSetupReducer
} from './+state/client-setup.reducer';
import { ClientSetupEffects } from './+state/client-setup.effects';
import { ClientFormComponent } from './components/client-form/client-form.component';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ClientFormComponent }
    ]),

    StoreModule.forFeature('clientSetup', clientSetupReducer, {
      initialState: clientSetupInitialState
    }),

    EffectsModule.forFeature([ClientSetupEffects])
  ],
  declarations: [ClientFormComponent]
})
export class ClientSetupModule {}
