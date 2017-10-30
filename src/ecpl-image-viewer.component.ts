import { Component, OnInit, Input, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'ecpl-image-viewer',
  template: `
  <a href="javascript:void(0)" (click)="showModal()" id="img-file-{{id}}">
      <img src="/assets/{{imgType}}.png" alt="Image File">
  </a>

  <div class="img-modal" *ngIf="showModalWindow" id="img-pop-{{id}}">
      <div class="modal-dialog">
          <div class="modal-header">
              <div style="padding: 5px;">
                  <img src="/assets/{{imgType}}.png" alt="Image File" class="img-icon-header pull-left">
                  <h3 class="pull-left">{{imgName}}</h3>
              </div>
              <button (click)="hideModal()" class="pull-right">x</button>
          </div>
          <div class="modal-body">
              <div class="scroller">
                  <img [src]="imgSrc" alt="">
              </div>
          </div>
      </div>
  </div>
  `,
  styles: [
    `
    .img-modal {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 10001;
    padding: 15px;
    }

    .modal-dialog {
        background-color: #fff;
        border: 1px solid #f2f2f2;
        margin-top: 0px;
        margin-bottom: 0px;
        width: 100%;
        height: 100%;
        display: table;
    }

    .modal-header {
        height: 6%;
        padding: 5px;
        display: table-row
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        padding: 5px;
    }

    button.pull-right {
        padding: 0 12px;
        background: none;
        outline: none;
        border: none;
        font-size: 25px;
        position: absolute;
        top: 0;
        right: 0;
        border-left: 1px solid #dedede;
        color: #dedede;
    }

    .modal-body {
        width: 100%;
        max-height: 94%;
        overflow: auto;
        padding: 5px;
        background: #dedede;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .modal-body .scroller {
        max-height: 94%;
        overflow: auto;
    }

    .img-icon-header {
        width: 20px;
        height: auto;
    }
    `
  ]
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
