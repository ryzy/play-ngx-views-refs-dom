import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
// import { UpgradeModule } from '@angular/upgrade/static';


import { AppComponent } from './app.component';
import { AComponent } from './components/a.component';
import { BComponent } from './components/b.component';
import { AppDirective } from './app.directive';
import { ViewChildrenComponent } from './components/view-children.component';
import { ViewContainerComponent } from './components/view-container.component';
import { TemplateComponent } from './components/template.component';
import { OutletsComponent } from './components/outlets.component';

@NgModule({
  imports: [
    BrowserModule,
    // UpgradeModule
  ],
  declarations: [
    AppDirective,
    AppComponent,
    AComponent,
    BComponent,
    ViewChildrenComponent,
    ViewContainerComponent,
    TemplateComponent,
    OutletsComponent,
  ],
  entryComponents: [
    AComponent,
    BComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public ngDoBootstrap(app: ApplicationRef): void {
  }
}
