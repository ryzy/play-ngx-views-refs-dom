import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'a-component',
  host: { 'class': 'component-wrapper' },
  template: `
    <h3>Component A</h3>
    A component content here...
  `,
})
export class AComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
  }
}
