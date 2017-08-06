import {
  AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, QueryList,
  ViewChild,
  ViewChildren, ViewRef,
} from '@angular/core';
import { AComponent } from './components/a.component';
import { BComponent } from './components/b.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>DOM sprinkling with Angular</h1>
    <app-view-container></app-view-container>
    <app-outlets></app-outlets>
    <app-view-children></app-view-children>
    <app-template [someInput]="'someInput content'"></app-template>
  `,
})
export class AppComponent implements AfterViewInit {

  public ngAfterViewInit(): void {

  }
}
