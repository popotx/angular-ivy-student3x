import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './approuting.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { VilkoComponent } from './vilko/vilko.component';
import { EditComponent } from './edit/edit.component';
import { DdetailsComponent } from './ddetails/ddetails.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    VilkoComponent,
    EditComponent,
    DdetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
