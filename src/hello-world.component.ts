import { Component } from '@angular/core';

@Component({
  selector: 'ecpl-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'Ecpl Image Viewer';
}
