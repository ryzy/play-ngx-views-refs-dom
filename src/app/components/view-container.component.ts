import {
  AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injector, OnInit, TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { BComponent } from './b.component';
import { AComponent } from './a.component';

@Component({
  selector: 'app-view-container',
  host: { 'class': 'component-wrapper' },
  template: `
    <h3>View Container playground</h3>
    
    <span>[before view container]</span>
    <ng-container #vc></ng-container>
    <span>[after view container]</span>
    
    <ng-template #tpl>
      <span class="component-wrapper">I am span in template.</span>
    </ng-template>
  `,
  styles: []
})
export class ViewContainerComponent implements AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef }) vcRef: ViewContainerRef;
  @ViewChild('tpl', {}) tplRef: TemplateRef<any>;

  public constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
  ) { }

  public ngAfterViewInit(): void {
    console.log('[ViewContainerComponent] #vc', { ref: this.vcRef, element: this.vcRef.element });
    console.log('[ViewContainerComponent] #tpl', { tplRef: this.tplRef });

    // Create/insert component A
    const cmpAFactory: ComponentFactory<AComponent> = this.cfr.resolveComponentFactory(AComponent);
    // const cmpARef: ComponentRef<AComponent> = cmpAFactory.create(this.injector);
    const cmpARef: ComponentRef<AComponent> = this.vcRef.createComponent(cmpAFactory);
    console.log('[ViewContainerComponent] cmp A', { cmpAFactory, cmpARef, viewRef: cmpARef.hostView });

    // Create/insert embedded view from template
    console.log('[ViewContainerComponent] inserted embedded tpl',
      this.vcRef.insert(this.tplRef.createEmbeddedView(null)));
  }
}
