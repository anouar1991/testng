import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataRowComponent } from './data-row/data-row.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataFormComponent } from './data-form/data-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataRowComponent,
    DataTableComponent,
    DataListComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
