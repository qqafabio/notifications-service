import { Module } from '@nestjs/common';
import { SendNotification } from '@application/users-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/users-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/users-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/users-cases/get-recipient-notifications';
import { ReadNotification } from '@application/users-cases/read-notification';
import { UnreadNotification } from '@application/users-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
