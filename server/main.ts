import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';

declare const module: any;

if (!module.hot) {
  enableProdMode();
}
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors();
  await app.listen(4000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap().catch(err => console.error(err));
