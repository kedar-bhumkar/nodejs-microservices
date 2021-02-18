import { Publisher, Subjects, TicketCreatedEvent } from '@hammerofdawn/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
