
import { BlDocument } from '../bl-document/bl-document';
import { MessageType } from './message-type/message-type';
import { MessageMethod } from './message-method/message-method';
import { MessageReminderInfo } from './message-info/message-reminder-info';
import { TextBlock } from '../text-block/text-block';

/*
 * A message is something that is sent to a customer
 * for example a reminder about delivering items.
 * It can be a email, direct message, sms, or all.
 */
export class Message extends BlDocument {
  // what type of message, ex 'reminder', 'alert', 'direct'
  messageType: MessageType;
  // what type of method should be used to send message ex: 'email', 'sms'
  messageMethod: MessageMethod;
  // the id of the customer
  customerId: string;
  // if employee should be known to customer, set it here
  employeeId?: string;
  // info based on the specific message type
  info?: MessageReminderInfo;
  // the actual message is separated into text blocks, this makes it very flexible
  textBlocks?: TextBlock[]
}


