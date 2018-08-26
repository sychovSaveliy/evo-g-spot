import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CallMeComponent } from './call-me/call-me.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, CallMeComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
