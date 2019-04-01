import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HeroDetailComponent } from '../pages/hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../pages/hero-search/hero-search.component';
import { MessagesComponent } from '../pages/messages/messages.component';

import { HeroService } from '../providers/hero.service';
import { MessageService } from '../providers/message.service';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppShellRenderDirective } from '../directives/app-shell.directives';
import { AppShellNoRenderDirective } from '../directives/app-shell.directives';

import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
