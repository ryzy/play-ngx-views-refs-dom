import {
  AfterViewInit, Component, ElementRef, HostBinding, OnInit, QueryList, ViewChild, ViewChildren, TemplateRef, ViewRef,
  ViewContainerRef,
  EmbeddedViewRef, ComponentRef,
} from '@angular/core';
import { AComponent } from './a.component';

@Component({
  selector: 'app-view-children',
  host: { 'class': 'component-wrapper' },
  template: `
    <h2 #hRef>View Children with 'AComponent'</h2>
    <a-component></a-component>
  `,
  styles: [],
})
export class ViewChildrenComponent implements AfterViewInit {
  @ViewChild('hRef') elementRef: ElementRef;
  @ViewChild('hRef', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  @ViewChild(AComponent) viewChild: AComponent;
  @ViewChild(AComponent, { read: ComponentRef }) viewChildComponentRef: ComponentRef<AComponent>;
  @ViewChild(AComponent, { read: ViewContainerRef }) viewChildContainerRef: ViewContainerRef;
  @ViewChildren(AComponent) viewChildren: QueryList<AComponent>;

  public ngAfterViewInit(): void {
    console.log('[ViewChildrenComponent] elementRef:', this.elementRef);
    console.log('[ViewChildrenComponent] viewContainerRef:', this.viewContainerRef);

    console.log('[ViewChildrenComponent] viewChild<AComponent>', this.viewChild);
    console.log('[ViewChildrenComponent] viewChild<AComponent> component ref', this.viewChildComponentRef);
    console.log('[ViewChildrenComponent] viewChild<AComponent> container ref', this.viewChildContainerRef);
    console.log('[ViewChildrenComponent] viewChildren<AComponent[]>', this.viewChildren);
  }
}
