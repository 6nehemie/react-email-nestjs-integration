import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { Resend } from 'resend';
import { EmailController } from './email.controller';

@Module({
  providers: [
    EmailService,
    {
      provide: Resend,
      useFactory: () => new Resend(process.env.RESEND_API_KEY as string),
    },
  ],
  controllers: [EmailController],
})
export class EmailModule {}
