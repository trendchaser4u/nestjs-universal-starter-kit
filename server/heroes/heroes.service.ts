import { Injectable } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';

@Injectable()
export class HeroesService {
  constructor(private readonly config: ConfigService) {
    this.config = config;
    // console.log(config.get('env'))
  }

  isProduction() {
    const env = this.config.get('database.environment');

    return env === 'production';
  }
}
