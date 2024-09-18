import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}

  public async get(url: string) {
    try {
      const response = await firstValueFrom(this.httpService.get(url));

      return response.data;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(
        'An error occurred while trying to fetch data from the external API.',
      );
    }
  }
}
