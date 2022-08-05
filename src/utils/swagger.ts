import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

/**
 * Setup swagger.
 *
 * @param app {@link INestApplication}
 */
export function setupSwagger(app: INestApplication) {
	const config = new DocumentBuilder()
		.setTitle("nest-node api document")
		.setDescription("nest-node 的接口文档")
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("swagger-ui", app, document);
}
