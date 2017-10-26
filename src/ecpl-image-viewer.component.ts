import { Component, OnInit, Input, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'ecpl-image-viewer',
  templateUrl: '/src/ecpl-image-viewer.component.html',
  styleUrls: ['../src/ecpl-image-viewer.component.css']
})
export class EcplImageViewerComponent implements OnInit {
  @Input() id: string;
  @Input() imgSrc: string;
  @Input() imgName: string;
  @Input() imgType: string;
  showModalWindow: boolean;

  constructor(private renderer: Renderer2) {}

  showModal() {
    this.showModalWindow = true;
    this.renderer.addClass(document.body, 'modal-open');
  }

  hideModal() {
    this.showModalWindow = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

  ngOnInit() {}
}
