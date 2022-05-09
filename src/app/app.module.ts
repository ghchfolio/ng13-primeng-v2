import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TableModule,
        PaginatorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
