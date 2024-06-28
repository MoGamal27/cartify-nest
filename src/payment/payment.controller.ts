import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('/create-payment-intent')
  async createPaymentIntent(@Body('amount') amount: number, @Body('currency') currency: string) {
    try {
      const paymentIntent = await this.paymentsService.createPaymentIntent(amount, currency);
      return { clientSecret: paymentIntent.client_secret };
    } catch (error) {
      throw new HttpException('Payment failed', HttpStatus.BAD_REQUEST);
    }
  }
}

