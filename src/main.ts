import { AuthGuard } from './common/auth/auth.guard';
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LoggerMiddleware } from './common/logger/logger.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalGuards(new AuthGuard())
  await app.listen(3000)
}
bootstrap()
