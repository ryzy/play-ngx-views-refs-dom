import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild, ViewRef } from '@angular/core';

@Component({
  selector: 'app-template',
  host: { 'class': 'component-wrapper' },
  template: `
    <h3>Template Component</h3>
    
    <ng-template #tpl1 let-foo>
      <p class="component-wrapper">template content, context '$implicit' (i.e. default) value: {{ foo }}</p>
    </ng-template>
    <ng-template #tpl2 let-sth="bar">
      <p class="component-wrapper">template content, context 'bar' value: {{ sth }}</p>
    </ng-template>
    
    <ng-container *ngTemplateOutlet="tpl1; context: myContext"></ng-container>
    <ng-container *ngTemplateOutlet="tpl2; context: myContext"></ng-container>
  `,
  styles: []
})
export class TemplateComponent implements AfterViewInit {
  @Input() someInput: string|undefined;

  @ViewChild('tpl1') tpl: TemplateRef<any>;

  public myContext: {} = { $implicit: 'FOO', bar: 'BAR'};

  constructor(private host: ElementRef) { }

  public ngAfterViewInit(): void {
    console.log('[TemplateComponent] host:', this.host);
    console.log('[TemplateComponent] TemplateRef tpl:', this.tpl);
    console.log('[TemplateComponent] TemplateRef tpl content:', (this.tpl.elementRef.nativeElement as HTMLElement).textContent);
    console.log('[TemplateComponent] @Input someInput', this.someInput);

    const v: ViewRef = this.tpl.createEmbeddedView(this.myContext);
    console.log('[TemplateComponent] created embedded view:', v);
  }
}
