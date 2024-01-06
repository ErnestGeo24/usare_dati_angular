import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ContainerComponent } from './container/container.component';
import { MacchinaComponent } from './macchina/macchina.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    ContainerComponent,
    MacchinaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
