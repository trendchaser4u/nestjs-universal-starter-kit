import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HeroDetailComponent } from '../pages/hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../pages/hero-search/hero-search.component';
import { HeroService } from '../providers/hero.service';
import { MessageService } from '../providers/message.service';
import { MessagesComponent } from '../pages/messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
