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

import { HeroesService } from './heroes.service';
@Controller('api')
export class HeroesController {
  constructor(private readonly heroService: HeroesService) {}

  @Get('heroes')
  getHeroes(@Query() query, @Req() request: Request): any[] {
    // console.log(this.heroService.isProduction())
    const Heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narcos' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    if (query && query.name) {
      return Heroes.filter(
        (obj): any => {
          return (
            Object.values(obj)[1]
              .toString()
              .toLowerCase()
              .indexOf(query.name.toString().toLowerCase()) > -1
          );
        }
      );
    }

    return Heroes;
  }

  @Get('heroes/:id')
  getHero(@Param() params, @Req() request: Request): any {
    const Heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return Heroes.filter(
      (obj): any => {
        return Object.values(obj)[0] === parseInt(params.id, 10);
      }
    )[0];
  }

  @Post('heroes')
  createHero(@Body() createHero: CreateHeroDto): any {
    return { id: Math.floor(Math.random() * 10), name: createHero.name };
  }

  @Put('heroes')
  updateHero(@Param('id') id: string, @Body() updateCatDto: any) {
    return updateCatDto;
  }

  @Delete('heroes/:id')
  removeHero(@Param('id') id: string) {
    return { id };
  }
}
