import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { SearchComponent } from './search/search/search.component';
import { AboutModule } from './about/about.module';
import { AboutComponent } from './about/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main/main.component';
import { MainModule } from './main/main.module';

const appRoutes: Routes = [
  { path: '', component: MainComponent }, // root component
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    SearchModule,
    AboutModule,
    MainModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
