import { Subscription } from 'rxjs/Subscription';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ReflectiveInjector,
  ComponentFactoryResolver
} from '@angular/core';

import { ModalService } from './modal.service';

import { FirstTimeModalComponent } from './first-time/first-time.modal.component';
import { SyncingModalComponent } from './syncing/syncing.modal.component'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  entryComponents: [
    FirstTimeModalComponent,
    SyncingModalComponent
  ]
})
export class ModalComponent {

  @ViewChild('messageContainer', { read: ViewContainerRef })
  messageContainer: ViewContainerRef;

  modal: any;
  progress: Number = 0;

  constructor (
    private _resolver: ComponentFactoryResolver,
    private _modalService: ModalService
  ) {
    this._modalService.getMessage().subscribe(
      message => this.open(message)
    );
    this._modalService.getProgress().subscribe(
      progress => { this.progress = progress; }
    );
  }

  open(message) {
    const factory = this._resolver.resolveComponentFactory(message);
    this.modal = this.messageContainer.createComponent(factory);
    console.log(typeof(this.modal));
  }

  close() {
    // wait for opacity transition to finish before hiding
    const container: any = document.getElementsByTagName('app-modal')[0].firstChild;
    container.addEventListener('transitionend', function callback () {
      this.classList.add('app-modal-hide');
      this.removeEventListener('transitionend', callback, false);
    }, false);
    container.classList.remove('app-modal-display');

    // remove and destroy message
    this.messageContainer.remove();
    this.modal.destroy();
  }

}
