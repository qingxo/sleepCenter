import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { DialogAccountComponent } from '../dialog-account'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  showModal() {
    const componentFatory = this.componentFactoryResolver.resolveComponentFactory(DialogAccountComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    const dd = <DialogAccountComponent>containerRef.createComponent(componentFatory).instance;
  }
}
