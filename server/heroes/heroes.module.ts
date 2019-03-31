import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { CommonModule } from 'server/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [HeroesController],
  providers: [HeroesService]
})
export class HeroesModule {}
