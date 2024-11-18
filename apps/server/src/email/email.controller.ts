import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  sendEmail(@Body() body: { email: string; name: string }) {
    this.emailService.sendFollowupEmail(body.email, body.name);
  }
}
