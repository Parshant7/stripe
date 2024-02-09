import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeController } from './stripe/stripe.controller';
import { StripeService } from './stripe/stripe.service';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [StripeModule],
  controllers: [AppController, StripeController],
  providers: [AppService, StripeService],
})
export class AppModule {}
