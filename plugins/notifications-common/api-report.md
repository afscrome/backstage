## API Report File for "@backstage/plugin-notifications-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
// @public (undocumented)
export type NewNotificationSignal = {
  action: 'new_notification';
  notification_id: string;
};

// @public (undocumented)
type Notification_2 = {
  id: string;
  user: string;
  created: Date;
  saved?: Date;
  read?: Date;
  done?: Date;
  updated?: Date;
  origin: string;
  payload: NotificationPayload;
};
export { Notification_2 as Notification };

// @public (undocumented)
export type NotificationPayload = {
  title: string;
  description?: string;
  link: string;
  severity: NotificationSeverity;
  topic?: string;
  scope?: string;
  icon?: string;
};

// @public (undocumented)
export type NotificationReadSignal = {
  action: 'notification_read' | 'notification_unread';
  notification_ids: string[];
};

// @public (undocumented)
export type NotificationSeverity = 'critical' | 'high' | 'normal' | 'low';

// @public (undocumented)
export type NotificationSignal = NewNotificationSignal | NotificationReadSignal;

// @public (undocumented)
export type NotificationStatus = {
  unread: number;
  read: number;
};

// @public (undocumented)
export type NotificationType = 'undone' | 'done' | 'saved';
```
