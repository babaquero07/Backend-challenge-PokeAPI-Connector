import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/providers/http/http.service';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpCustomService) {}

  async getPokemons(): Promise<{ results: [{ name: string; url: string }] }> {
    const { results } = await this.httpService.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );

    return {
      results,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} api`;
  }
}
