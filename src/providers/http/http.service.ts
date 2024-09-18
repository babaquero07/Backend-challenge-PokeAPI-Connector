import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}

  public async get(url: string) {
    try {
      const response = await firstValueFrom(this.httpService.get(url));

      if (!response || response.status === 404) {
        this.handleError(new NotFoundException('Resource not found.'));
      }

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    if (error.response && error.response.status === 404) {
      throw new NotFoundException('Resource not found.');
    }

    console.log(error);

    throw new InternalServerErrorException(
      'An error occurred while trying to fetch data from the external API.',
    );
  }
}
