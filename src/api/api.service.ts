import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/providers/http/http.service';
import {
  PokemonAndTypesResponse,
  PokemonResponse,
  PokemonsResponse,
} from './interfaces';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpCustomService) {}

  async getPokemons(): Promise<PokemonsResponse> {
    const { results } = await this.httpService.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );

    return {
      results,
    };
  }

  async getPokemonById(id: string): Promise<PokemonResponse> {
    const { name, types } = await this.httpService.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    return {
      name,
      types,
    };
  }

  private async buildPokemonTypesWithTranslations(pokemonData: any) {
    const typesWithTranslations = await Promise.all(
      pokemonData.types.map(async (typeInfo) => {
        const typeData = await this.httpService.get(typeInfo.type.url);

        const spanishData = typeData.names.find(
          (n) => n.language.name === 'es',
        );

        const japaneseData = typeData.names.find(
          (n) => n.language.name === 'ja',
        );

        return {
          ...typeInfo,
          type: {
            ...typeInfo.type,
            names: [
              {
                language: {
                  name: 'es',
                  url: spanishData?.language?.url || null,
                },
                name: spanishData?.name || null,
              },
              {
                language: {
                  name: 'ja',
                  url: japaneseData?.language?.url || null,
                },
                name: japaneseData?.name || null,
              },
            ],
          },
        };
      }),
    );

    return typesWithTranslations;
  }

  async findPokemonAndTypes(id: string): Promise<PokemonAndTypesResponse> {
    const pokemonData = await this.httpService.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    const typesWithTranslations =
      await this.buildPokemonTypesWithTranslations(pokemonData);

    return {
      name: pokemonData.name,
      types: typesWithTranslations,
    };
  }
}
