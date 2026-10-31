import { Injectable } from '@angular/core';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  needsActivation?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly recipientEmail = 'sourabhsuman014@gmail.com';
  private readonly endpoint = `https://formsubmit.co/ajax/${this.recipientEmail}`;

  async sendMessage(data: ContactMessage): Promise<ContactResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: `[Portfolio Inquiry] ${data.subject} (from ${data.name})`,
          message: data.message,
          _template: 'table',
          _captcha: 'false'
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const result = await response.json().catch(() => ({}));
      const msg = typeof result.message === 'string' ? result.message : '';
      const isSuccess = result.success === 'true' || result.success === true;

      if (isSuccess) {
        return {
          success: true,
          message: `Thank you, ${data.name}! Your message has been sent directly to Sourabh Suman at ${this.recipientEmail}. I will get back to you shortly.`
        };
      }

      if (msg.toLowerCase().includes('activat')) {
        return {
          success: true,
          needsActivation: true,
          message: `Your message was dispatched! FormSubmit has sent a one-time activation confirmation to ${this.recipientEmail}. Once verified, all future messages route directly to the inbox.`
        };
      }

      return {
        success: false,
        message: msg || 'The mail service returned an unexpected response. Please use the direct email link below.'
      };
    } catch (error: any) {
      clearTimeout(timeoutId);
      const isTimeout = error?.name === 'AbortError';
      return {
        success: false,
        message: isTimeout
          ? 'The server took longer than expected to respond. You can send your message directly using the mail button below.'
          : 'A network connectivity issue occurred. Please use the direct email link below.'
      };
    }
  }

  getMailToUrl(data: ContactMessage): string {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${data.subject || 'Opportunity / Discussion'}`);
    const body = encodeURIComponent(
      `Hello Sourabh,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n`
    );
    return `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;
  }
}
