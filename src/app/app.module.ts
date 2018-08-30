import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PackageInputComponent } from './package-input/package-input.component';
import { TimeRangleInputComponent } from './time-rangle-input/time-rangle-input.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageService } from './Shared/Services/package.service';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from'@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PackageInputComponent,
    TimeRangleInputComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
