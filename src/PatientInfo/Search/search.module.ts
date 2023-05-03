import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './search.component'
import {HeadingComponent} from '../heading/heading.component'
import { RouterModule } from '@angular/router';
import {SerachRoutes} from './search.routing'
import { MasterPageComponent } from '../master-page/master-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from '../InfoDisplay/display.component';
import { ParentComponent } from '../parent/parent.component';


@NgModule({
  declarations: [
    SearchComponent,HeadingComponent, MasterPageComponent, DisplayComponent, ParentComponent
  ],
  imports: [
    BrowserModule ,RouterModule.forRoot(SerachRoutes), HttpClientModule , FormsModule 
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class SearchModule { }
