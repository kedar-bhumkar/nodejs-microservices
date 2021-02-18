import { Subjects, Publisher, PaymentCreatedEvent } from '@hammerofdawn/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
