import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InnerComponentComponent } from './inner-component/inner-component.component';


@NgModule({
  declarations: [
    AppComponent,
    InnerComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InnerComponentComponent]
})
export class AppModule { }
