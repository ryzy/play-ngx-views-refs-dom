import { Component } from '@angular/core';
import { BComponent } from './b.component';


@Component({
  selector: 'app-outlets',
  host: { 'class': 'component-wrapper' },
  template: `
    <h3>Outlets: ngTemplateOutlet</h3>
    
    <ng-container *ngTemplateOutlet="tpl; context: myContext"></ng-container>    
    <ng-template #tpl let-a let-b="bar">
      <p class="component-wrapper">
        I'm <b>#tpl</b> template inserted via <b>ngTemplateOutlet</b>.
        <br />
        Context values: {{ a }}, {{ b }}
      </p>
    </ng-template>
    
    <hr />
    
    <p>B Component inserted via <b>*ngComponentOutlet</b>:</p>
    <ng-container *ngComponentOutlet="myComponent"></ng-container>
  `,
})
export class OutletsComponent {
  public myComponent: typeof BComponent = BComponent;
  public myContext: {} = { $implicit: 'Hello', bar: 'World'};
}
