import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ApiService } from './service/dataservice';
import { DialogComponent } from '../app/app-dialog/dialog.component';
import {AppCustomTableComponent} from './custom-table/custom-table.component';
import {SortByPipe} from './pipes/sortBy';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    AppCustomTableComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    SortByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
