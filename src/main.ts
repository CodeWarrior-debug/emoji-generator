import { AuthGuard } from './common/auth/auth.guard'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LoggerMiddleware } from './common/logger/logger.middleware'
import { BrowserInterceptor } from './common/browser/browser.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.use(new LoggerMiddleware())
  app.useGlobalGuards(new AuthGuard())
  app.useGlobalInterceptors(new BrowserInterceptor())
  await app.listen(3000)
}
bootstrap()
