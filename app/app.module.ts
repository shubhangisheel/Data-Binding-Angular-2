/**
 * Created by shubhangisheel on 2016-10-02.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListOfHeroes} from './app.list-of-heroes.component';

@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent,ListOfHeroes],
    providers: [],
    bootstrap:[AppComponent]
})

export class AppModule{}