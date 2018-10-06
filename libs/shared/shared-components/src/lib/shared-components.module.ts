import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './components/search/search.component';
@NgModule({
  imports: [CommonModule],
  declarations: [SearchPanelComponent],
  exports: [SearchPanelComponent]
})
export class SharedComponentsModule {}
