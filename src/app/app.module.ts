import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/pages/home/home.component';
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule,} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {AddFormDialogComponent, } from "./features/partials/add-form-dialog/add-form-dialog.component";
import {EditFormComponent,  } from './features/partials/edit-form/edit-form.component';
import { DeleteComponent } from './features/partials/delete/delete.component';
import {RegisterComponent} from "./features/partials/register/register.component";
import {LoginComponent} from "./features/partials/login/login.component";
import {HeaderComponent} from "./features/mainlayout/header/header.component";
import {MainpageComponent} from "./features/pages/mainpage/mainpage.component";
import {CategoryComponent} from "./features/pages/category/category.component";
import {HotelDetailsComponent} from "./features/pages/hotel-details/hotel-details.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddFormDialogComponent,
    EditFormComponent,
    DeleteComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MainpageComponent,
    CategoryComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
