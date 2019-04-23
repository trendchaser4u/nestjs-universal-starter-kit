import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { ServerTransferStateModule } from '@angular/platform-server';
import { UniversalInterceptor } from '../interceptors/universal.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService, CookieBackendService } from 'ngx-cookie';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true
    },
    { provide: CookieService, useClass: CookieBackendService }
  ]
})
export class AppServerModule {}
