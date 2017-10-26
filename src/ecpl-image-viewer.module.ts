import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcplImageViewerComponent } from './ecpl-image-viewer.component';

@NgModule({
  declarations: [EcplImageViewerComponent],
  imports: [CommonModule],
  exports: [EcplImageViewerComponent]
})
export class EcplImageViewerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EcplImageViewerModule
    };
  }
}
