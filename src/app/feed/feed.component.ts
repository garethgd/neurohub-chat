import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { ChatService } from '../services/chatservice.service';
import { Observable } from 'rxjs/Observable'
import { ChatMessage } from '../models/chat-message.model';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages()
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }

}
