import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as clientSearchInitialState,
  clientSearchReducer
} from './+state/client-search.reducer';
import { ClientSearchEffects } from './+state/client-search.effects';
import { SearchComponent } from './components/search/search.component';
import { SharedComponentsModule } from '../../../shared/shared-components/src/lib/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: SearchComponent}
    ]),

    StoreModule.forFeature('clientSearch', clientSearchReducer, {
      initialState: clientSearchInitialState
    }),

    EffectsModule.forFeature([ClientSearchEffects])
  ],
  declarations: [SearchComponent],

})
export class ClientSearchModule {}
