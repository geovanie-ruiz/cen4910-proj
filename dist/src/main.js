"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        allowedHeaders: ['content-type', 'authorization', 'pragma'],
        origin: ['https://localhost:4200', 'http://localhost:4200', '*'],
        methods: ['POST', 'GET'],
    });
    app.use((0, helmet_1.default)());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Skywalker API')
        .setDescription('The API for the Skywalker application.')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map