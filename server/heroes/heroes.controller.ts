import {
  Controller,
  Get,
  Req,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete
} from '@nestjs/common';
import { Request } from 'express';
import { CreateHeroDto } from './dtos/create-hero.dto';

@Controller('api')
export class HeroesController {
  @Get('heroes')
  getHeroes(@Query() query, @Req() request: Request): string {
    return 'This action returns all heroes ' + query.name;
  }

  @Get('heroes/:id')
  getHero(@Param() params, @Req() request: Request): string {
    return 'This action returns hero ' + params.id;
  }

  @Post('heroes')
  createHero(@Body() createHero: CreateHeroDto): any {
    return createHero;
  }

  @Put('heroes/:id')
  updateHero(@Param('id') id: string, @Body() updateCatDto: any) {
    return `This action updates a #${id} hero`;
  }

  @Delete('heroes/:id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} hero`;
  }
}
