import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { AppController } from './app.controller';
import { HeroesModule } from '../heroes/heroes.module';
import { ConfigModule } from 'nestjs-config';
import { resolve } from 'path';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
const BROWSER_DIR = join(process.cwd(), 'dist/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    ConfigModule.load(
      resolve(__dirname, '../common/config', '**/!(*.d).{ts,js}')
    ),
    HeroesModule,
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('../../dist/server/main.js'),
      extraProviders: [
        {
          provide: 'REQUEST',
          useExisting: REQUEST
        },
        {
          provide: 'RESPONSE',
          useExisting: RESPONSE
        }
      ]
    })
  ],
  controllers: [AppController]
})
export class ApplicationModule {}
