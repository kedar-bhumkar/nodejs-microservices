import { Publisher, OrderCreatedEvent, Subjects } from '@hammerofdawn/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
