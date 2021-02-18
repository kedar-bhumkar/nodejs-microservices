import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@hammerofdawn/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
