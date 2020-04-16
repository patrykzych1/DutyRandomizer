import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { GetComponent } from './components/get/get.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import { GetItemComponent } from './components/get-item/get-item.component';
import { GetItemIdComponent } from './components/get-item-id/get-item-id.component';
import { GetItemNameComponent } from './components/get-item-name/get-item-name.component';
import { GetItemSurnameComponent } from './components/get-item-surname/get-item-surname.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    GetComponent,
    HomeComponent,
    NavbarComponent,
    GetItemComponent,
    GetItemIdComponent,
    GetItemNameComponent,
    GetItemSurnameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
