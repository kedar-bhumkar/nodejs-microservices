import { Publisher, Subjects, TicketUpdatedEvent } from '@hammerofdawn/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
