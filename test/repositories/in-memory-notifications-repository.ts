import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/respositories/notifications-repository';

export class inMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
