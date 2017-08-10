import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chatservice.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  constructor(private chatService: ChatService) { }
  message: string;
  ngOnInit() {
  }

  send() {
    this.chatService.sendMessage(this.message)
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send()
    }
  }

}
