import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Resend } from 'resend';
import * as process from 'node:process';

import SignupFollowupTemplate from 'emails/signup-followup-template';
import { render } from '@react-email/render';

export interface ResendError {
  statusCode: number;
  message: string;
  name: string;
}

@Injectable()
export class EmailService {
  constructor(private readonly resend: Resend) {}

  async sendFollowupEmail(to: string, name: string): Promise<void> {
    try {
      const emailHtml: string = await render(
        SignupFollowupTemplate({ name: name }),
      );

      const { error } = await this.resend.emails.send({
        from: `${process.env.EMAIL_NAME} <${process.env.RESEND_EMAIL}>`,
        to,
        subject: 'Joing Valoria today!',
        html: emailHtml,
      });

      if (error as ResendError) {
        throw new InternalServerErrorException(error.message);
      }
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }
}
