import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/providers/http/http.service';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpCustomService) {}

  // TODO: Create interfaces for the return types
  async getPokemons(): Promise<{ results: [{ name: string; url: string }] }> {
    const { results } = await this.httpService.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );

    return {
      results,
    };
  }

  async getPokemonById(id: number): Promise<any> {
    const { name, types } = await this.httpService.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    return {
      name,
      types,
    };
  }
}
