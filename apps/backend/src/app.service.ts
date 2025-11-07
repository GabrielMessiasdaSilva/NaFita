import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return 'Olá do serviço do NestJS';
    }
}