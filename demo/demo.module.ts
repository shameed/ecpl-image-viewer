import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcplImageViewerModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, EcplImageViewerModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
