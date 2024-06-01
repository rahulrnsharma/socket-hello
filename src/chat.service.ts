import { Injectable } from '@nestjs/common';

interface Message {
  sender: string;
  message: string;
}

@Injectable()
export class ChatService {
  private messages: Message[] = [];

  addMessage(message: Message) {
    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages;
  }
}