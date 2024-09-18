import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('pokemon')
  findAll() {
    return this.apiService.getPokemons();
  }

  @Get('pokemon/:id')
  findOne(@Param('id') id: string) {
    return this.apiService.getPokemonById(id);
  }

  @Get('pokemonAndTypes/:id')
  findPokemonAndTypes(@Param('id') id: string) {
    return this.apiService.findPokemonAndTypes(id);
  }
}
