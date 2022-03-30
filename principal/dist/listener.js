"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://luaszlyh:AYtEwrXg1kTpTpctt2Ln1O2yCE_1AIQZ@moose.rmq.cloudamqp.com/luaszlyh'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            }
        }
    });
    app.listen().then(() => {
        common_1.Logger.debug('Microservice Listening');
    });
}
bootstrap();
//# sourceMappingURL=listener.js.map