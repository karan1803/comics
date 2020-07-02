import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { ServiceWorkerModule } from  '@angular/service-worker';
import {environment} from '../environments/environment';
import { from } from 'rxjs';
import { ComicServiceService } from './comic-service.service';
import { Pipe, PipeTransform } from '@angular/core';
declare var $: any;





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [] ,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled:  environment.production })
  ],
  providers: [ComicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
