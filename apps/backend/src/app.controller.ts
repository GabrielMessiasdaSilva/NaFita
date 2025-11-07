import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface HelloResponse {
  message: string;
  timestamp: number;
}

@Controller('api')
export class AppController {

  @Get('hello')
  getHello(): HelloResponse {
    return {
      message: 'Aplicação com NestJs!',
      timestamp: Date.now(),
    
    };
  }
}
